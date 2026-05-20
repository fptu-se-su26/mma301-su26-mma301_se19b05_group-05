import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.headerTitle}>My Profile</Text>

        {/* User Info */}
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

        {/* Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>📦</Text>

            <View>
              <Text style={styles.menuTitle}>My Orders</Text>
              <Text style={styles.menuSubtitle}>
                View your order history
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>❤️</Text>

            <View>
              <Text style={styles.menuTitle}>Wishlist</Text>
              <Text style={styles.menuSubtitle}>
                Your saved furniture items
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>⚙️</Text>

            <View>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuSubtitle}>
                Manage app preferences
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuEmoji}>🚪</Text>

            <View>
              <Text style={styles.menuTitle}>Logout</Text>
              <Text style={styles.menuSubtitle}>
                Sign out from your account
              </Text>
            </View>
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

  headerTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 30,
  },

  profileCard: {
    backgroundColor: "#f97316",
    borderRadius: 24,
    alignItems: "center",
    paddingVertical: 35,
    marginBottom: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
  },

  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },

  userEmail: {
    marginTop: 8,
    fontSize: 16,
    color: "#fff",
  },

  menuContainer: {
    marginTop: 10,
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
    fontSize: 28,
    marginRight: 18,
  },

  menuTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  menuSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },
});