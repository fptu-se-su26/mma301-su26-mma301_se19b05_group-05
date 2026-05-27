import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { getCartCount, useAppState } from "@/state/AppStateContext";

export default function ProfileScreen() {
  const { cartItems, wishlistItems } = useAppState();
  const cartCount = getCartCount(cartItems);
  const wishlistCount = wishlistItems.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* User Card */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
            style={styles.avatar}
          />

          <Text style={styles.userName}>John Doe</Text>

          <Text style={styles.userEmail}>
            johndoe@gmail.com
          </Text>
        </View>

        {/* Menu Section */}
        <View style={styles.menuContainer}>
          {/* Orders */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/order")}
          >
            <Text style={styles.menuEmoji}>📦</Text>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>My Orders</Text>

              <Text style={styles.menuSubtitle}>
                View your order history
              </Text>
            </View>
          </TouchableOpacity>

          {/* Wishlist */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/wishlist")}
          >
            <Text style={styles.menuEmoji}>❤️</Text>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>
                Wishlist ({wishlistCount})
              </Text>

              <Text style={styles.menuSubtitle}>
                Your favorite furniture items
              </Text>
            </View>
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/cart")}
          >
            <Text style={styles.menuEmoji}>🛒</Text>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>My Cart ({cartCount})</Text>

              <Text style={styles.menuSubtitle}>
                Check your shopping cart
              </Text>
            </View>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/settings")}
          >
            <Text style={styles.menuEmoji}>⚙️</Text>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Settings</Text>

              <Text style={styles.menuSubtitle}>
                Manage app preferences
              </Text>
            </View>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
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
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
  },

  profileCard: {
    backgroundColor: "#f97316",
    borderRadius: 28,
    alignItems: "center",
    paddingVertical: 35,
    marginBottom: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: "#fff",
  },

  userName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },

  userEmail: {
    marginTop: 8,
    fontSize: 16,
    color: "#fff",
  },

  menuContainer: {
    marginBottom: 40,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  menuEmoji: {
    fontSize: 30,
    marginRight: 18,
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  menuSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },

  logoutButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 10,
  },

  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});