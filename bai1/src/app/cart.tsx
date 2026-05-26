import React, { createContext, useContext, useReducer } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type CartItem = {
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

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartContext.Provider");
  }

  return context;
}

function CartContent() {
  const { state, dispatch } = useCart();

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = state.items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  
  const handleCheckout = () => {
    if (state.items.length === 0) {
      if (typeof window !== "undefined") {
        window.alert("Your cart is empty. Please add products before checkout.");
      } else {
        Alert.alert("Empty Cart", "Please add products before checkout.");
      }
      return;
    }

    if (typeof window !== "undefined") {
      window.alert(`Checkout successfully!\nTotal: $${total}`);
    } else {
      Alert.alert("Checkout", `Checkout successfully!\nTotal: $${total}`);
    }
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>

        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => dispatch({ type: "DECREASE", id: item.id })}
          >
            <Feather name="minus" size={18} color="black" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => dispatch({ type: "INCREASE", id: item.id })}
          >
            <Feather name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch({ type: "REMOVE", id: item.id })}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Cart</Text>

        <Ionicons name="cart-outline" size={26} color="black" />
      </View>

      <FlatList
        data={state.items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        }
      />

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Order Summary</Text>

        <View style={styles.summaryRow}>
          <Text>Subtotal</Text>
          <Text>${subtotal}</Text>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.iconText}>
            <MaterialIcons name="local-shipping" size={18} color="black" />
            <Text> Shipping</Text>
          </View>
          <Text>${shipping}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${total}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <MaterialIcons name="payment" size={22} color="white" />
          <Text style={styles.checkoutText}> Proceed to Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => dispatch({ type: "CLEAR" })}
        >
          <Text style={styles.clearText}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CartScreen() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <CartContent />
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  cartItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#ddd",
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  itemPrice: {
    fontSize: 15,
    color: "green",
    marginVertical: 5,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyButton: {
    backgroundColor: "#ddd",
    padding: 6,
    borderRadius: 8,
  },

  quantityText: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  summaryBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    elevation: 2,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  checkoutButton: {
    marginTop: 15,
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  clearButton: {
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dc3545",
    alignItems: "center",
  },

  clearText: {
    color: "#dc3545",
    fontWeight: "bold",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    color: "#777",
  },
});