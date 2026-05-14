import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>FPT University</Text>

      <View style={styles.center}>
        <Text style={styles.title}>Chào mừng trở lại!</Text>

        <Text style={styles.subtitle}>
          Đăng nhập để tiếp tục hành trình học tập của bạn.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Email Sinh viên</Text>

        <TextInput
          placeholder="student@fpt.edu.vn"
          style={styles.input}
        />

        <Text style={styles.label}>Mật khẩu</Text>

        <TextInput
          placeholder="••••••••"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
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

  center: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 40,
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 28,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 4,
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
  },

  forgot: {
    textAlign: "right",
    color: "#b45309",
    marginBottom: 20,
    fontWeight: "600",
  },

  loginBtn: {
    backgroundColor: "#f97316",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});