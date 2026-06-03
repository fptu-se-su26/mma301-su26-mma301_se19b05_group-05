import { useApp } from "@/context/AppContext";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const { cartItems, wishlistItems } = useApp();

  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );
  const wishlistCount = wishlistItems.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.logoText}>Furniture Store</Text>

        <View style={styles.headerSection}>
          <Text style={styles.title}>Welcome Back 👋</Text>

          <Text style={styles.subtitle}>
            Discover modern furniture for your dream house.
          </Text>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Summer Sale 50%</Text>

          <Text style={styles.bannerText}>
            Upgrade your home with premium interior products.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Navigation</Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/product")}
          >
            <Text style={styles.cardEmoji}>🛋️</Text>
            <Text style={styles.cardTitle}>Products</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/cart")}
          >
            <Text style={styles.cardEmoji}>🛒</Text>
            <Text style={styles.cardTitle}>Cart</Text>
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/order")}
          >
            <Text style={styles.cardEmoji}>📦</Text>
            <Text style={styles.cardTitle}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/wishlist")}
          >
            <Text style={styles.cardEmoji}>❤️</Text>
            <Text style={styles.cardTitle}>Wishlist</Text>
            {wishlistCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{wishlistCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/profile")}
          >
            <Text style={styles.cardEmoji}>👤</Text>
            <Text style={styles.cardTitle}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/settings")}
          >
            <Text style={styles.cardEmoji}>⚙️</Text>
            <Text style={styles.cardTitle}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  logoText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#d2691e",
    marginTop: 20,
  },

  headerSection: {
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },

  banner: {
    backgroundColor: "#f97316",
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
  },

  bannerTitle: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 10,
  },

  bannerText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: "center",
    marginBottom: 18,
    position: "relative",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  cardEmoji: {
    fontSize: 36,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  badge: {
    position: "absolute",
    top: 10,
    right: 15,
    backgroundColor: "#d2691e",
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
