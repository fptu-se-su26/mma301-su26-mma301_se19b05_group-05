import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
const { width } = Dimensions.get("window");

// Dữ liệu mẫu sản phẩm nội thất trong Wishlist
const INITIAL_WISHLIST = [
  {
    id: "1",
    name: "Modern Velvet Sofa",
    category: "Living Room",
    price: "$850",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500", // Link ảnh bàn ghế mẫu
  },
  {
    id: "2",
    name: "Minimalist Wooden Table",
    category: "Dining Room",
    price: "$320",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500",
  },
  {
    id: "3",
    name: "Scandinavian Armchair",
    category: "Bedroom",
    price: "$210",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
  },
];

export default function WishlistScreen() {
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);

  // Hàm xóa sản phẩm khỏi Wishlist
  const removeItem = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Header điều hướng quay lại */}
        <ThemedView style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
            <ThemedText type="default" style={styles.backIcon}>←</ThemedText>
          </TouchableOpacity>
          <ThemedText type="smallBold" style={styles.headerTitle}>My Wishlist</ThemedText>
          <ThemedView style={{ width: 40 }} />
        </ThemedView>

        {wishlistItems.length === 0 ? (
          // Trạng thái trống (Empty State)
          <ThemedView style={styles.emptyContainer}>
            <ThemedText style={styles.emptyIcon}>❤️</ThemedText>
            <ThemedText type="subtitle" style={styles.emptyText}>Your wishlist is empty</ThemedText>
            <ThemedText type="small" style={styles.emptySubtext}>
              Tap the heart icon on any product to save it here.
            </ThemedText>
            <TouchableOpacity 
              style={styles.shopButton} 
              onPress={() => router.push("/product")}
            >
              <ThemedText type="smallBold" style={styles.shopButtonText}>Explore Products</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ) : (
          // Danh sách sản phẩm dạng lưới (Grid) hoặc dòng (Row)
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollList}>
            {wishlistItems.map((item) => (
              <ThemedView key={item.id} style={styles.productCard}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                
                {/* Nút xóa nhanh khỏi Wishlist */}
                <TouchableOpacity 
                  style={styles.heartBadge} 
                  onPress={() => removeItem(item.id)}
                >
                  <ThemedText style={{ fontSize: 16 }}>❤️</ThemedText>
                </TouchableOpacity>

                <ThemedView style={styles.productInfo}>
                  <ThemedText type="small" style={styles.categoryText}>{item.category}</ThemedText>
                  <ThemedText type="default" style={styles.productName} numberOfLines={1}>{item.name}</ThemedText>
                  <ThemedText type="smallBold" style={styles.productPrice}>{item.price}</ThemedText>
                </ThemedView>

                {/* Nút Thêm vào giỏ hàng nhanh */}
                <TouchableOpacity 
                  style={styles.addToCartButton}
                  onPress={() => router.push("/cart")}
                >
                  <ThemedText type="smallBold" style={styles.addToCartText}>Add to Cart 🛒</ThemedText>
                </TouchableOpacity>
              </ThemedView>
            ))}
          </ScrollView>
        )}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'web' ? 80 : 0,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
  },
  scrollList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  productCard: {
    width: (width - 44) / 2, // Chia 2 cột đều nhau có trừ padding khoảng cách
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    position: "relative",
    borderWidth: 1,
    borderColor: "#f0f0f0", // Hoặc có thể style theo theme
    paddingBottom: 12,
  },
  productImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#eaeaea",
  },
  heartBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productInfo: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  categoryText: {
    color: "#888",
    fontSize: 12,
    textTransform: "uppercase",
  },
  productName: {
    marginVertical: 4,
  },
  productPrice: {
    color: "#d2691e", // Đồng bộ tông nâu đất ấm áp của nội thất
  },
  addToCartButton: {
    backgroundColor: "#d2691e",
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 12,
  },
  // Style cho Empty State
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    textAlign: "center",
    marginBottom: 8,
  },
  emptySubtext: {
    color: "#888",
    textAlign: "center",
    marginBottom: 24,
  },
  shopButton: {
    backgroundColor: "#d2691e",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  shopButtonText: {
    color: "#fff",
  },
});