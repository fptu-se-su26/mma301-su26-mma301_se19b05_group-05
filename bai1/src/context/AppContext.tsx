import React, { createContext, useState, useContext } from "react";

export interface Product {
  id: string;
  name: string;
  category?: string;
  price: number | string; // support string like "$850" or number like 120
  image: string;
  quantity?: number;
}

interface AppContextType {
  cartItems: Product[];
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Default items as mock data for the application
const INITIAL_CART: Product[] = [
  {
    id: "c1",
    name: "Modern Chair",
    price: 120,
    quantity: 1,
    image: "https://tse1.mm.bing.net/th/id/OIP.dEBSoPzPj1HInVior87AtwHaLy?pid=Api&P=0&h=180",
  },
  {
    id: "c2",
    name: "Wood Table",
    price: 250,
    quantity: 2,
    image: "https://tse1.mm.bing.net/th/id/OIP.Qn9OQK9IYgTqIKgpYJrlSQHaHa?pid=Api&P=0&h=180",
  },
  {
    id: "c3",
    name: "Oil Lamp",
    price: 400,
    quantity: 10,
    image: "https://tse1.mm.bing.net/th/id/OIP.fPgiVSEbYPbrI9K9RFpB-wHaEK?pid=Api&P=0&h=180",
  },
];

const INITIAL_WISHLIST: Product[] = [
  {
    id: "w1",
    name: "Modern Velvet Sofa",
    category: "Living Room",
    price: "$850",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
  },
  {
    id: "w2",
    name: "Minimalist Wooden Table",
    category: "Dining Room",
    price: "$320",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500",
  },
  {
    id: "w3",
    name: "Scandinavian Armchair",
    category: "Bedroom",
    price: "$210",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
  },
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>(INITIAL_CART);
  const [wishlistItems, setWishlistItems] = useState<Product[]>(INITIAL_WISHLIST);

  // Helper to parse price to number
  const parsePrice = (price: number | string): number => {
    if (typeof price === "number") return price;
    const clean = price.replace(/[^0-9.]/g, "");
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Add to cart
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      const priceNum = parsePrice(product.price);
      return [...prev, { ...product, price: priceNum, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase cart item quantity
  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease cart item quantity
  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) > 1 ? (item.quantity || 1) - 1 : 1,
            }
          : item
      )
    );
  };

  // Add to wishlist
  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Check if an item is in wishlist
  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
