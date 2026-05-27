import React, { createContext, useContext, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export type AppState = {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
};

export type AppAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "SET_CART_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "ADD_TO_WISHLIST"; payload: WishlistItem }
  | { type: "REMOVE_FROM_WISHLIST"; payload: { id: string } }
  | { type: "TOGGLE_WISHLIST"; payload: WishlistItem }
  | { type: "CLEAR_CART" };

const initialState: AppState = {
  // Dữ liệu mẫu để demo số lượng trong Home/Profile
  cartItems: [
    { id: "1", name: "Modern Chair", price: 120, quantity: 1 },
    { id: "2", name: "Wood Table", price: 250, quantity: 2 },
  ],
  wishlistItems: [
    { id: "w1", name: "Modern Velvet Sofa", price: 899 },
    { id: "w2", name: "Minimalist Coffee Table", price: 199 },
  ],
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cartItems.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }

    case "SET_CART_QUANTITY": {
      const q = Math.max(1, action.payload.quantity);
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: q } : i
        ),
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload.id),
      };
    }

    case "ADD_TO_WISHLIST": {
      const exists = state.wishlistItems.some((i) => i.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (i) => i.id !== action.payload.id
        ),
      };
    }

    case "TOGGLE_WISHLIST": {
      const exists = state.wishlistItems.some((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(
            (i) => i.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }

    case "CLEAR_CART": {
      return { ...state, cartItems: [] };
    }

    default:
      return state;
  }
}

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<React.Dispatch<AppAction> | undefined>(
  undefined
);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => state, [state]);
  return (
    <AppStateContext.Provider value={value}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within <AppProvider>.");
  return ctx;
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) throw new Error("useAppDispatch must be used within <AppProvider>.");
  return ctx;
}

export function getCartCount(cartItems: CartItem[]) {
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

