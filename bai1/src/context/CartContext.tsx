import React, { createContext, useContext, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "INCREASE"; id: string }
  | { type: "DECREASE"; id: string }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

const initialState: CartState = {
  items: [
    {
      id: "1",
      name: "Modern Chair",
      price: 120,
      quantity: 1,
      image: "https://tse1.mm.bing.net/th/id/OIP.dEBSoPzPj1HInVior87AtwHaLy?pid=Api&P=0&h=180",
    },
    {
      id: "2",
      name: "Wood Table",
      price: 250,
      quantity: 2,
      image: "https://tse1.mm.bing.net/th/id/OIP.Qn9OQK9IYgTqIKgpYJrlSQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: "3",
      name: "Oil Lamp",
      price: 400,
      quantity: 10,
      image: "https://tse1.mm.bing.net/th/id/OIP.fPgiVSEbYPbrI9K9RFpB-wHaEK?pid=Api&P=0&h=180",
    },
  ],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "CLEAR":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}