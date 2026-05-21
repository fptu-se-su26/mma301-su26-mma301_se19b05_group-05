import React, { useState } from "react";
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


const initialCart = [
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
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCart);

  
  const increaseQuantity = (id: string) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updated);
  };

  
  const decreaseQuantity = (id: string) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );
    setCartItems(updated);
  };

  
  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  
  const renderItem = ({ item }: any) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>

        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Feather name="minus" size={18} color="black" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => increaseQuantity(item.id)}
          >
            <Feather name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => removeItem(item.id)}>
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
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => Alert.alert("Checkout", "Proceeding to checkout...")}
        >
          <MaterialIcons name="payment" size={22} color="white" />
          <Text style={styles.checkoutText}> Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});