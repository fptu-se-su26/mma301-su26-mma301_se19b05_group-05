import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.fakeLogo}>
          <Text style={styles.logoText}>FPT</Text>
        </View>

        <Text style={styles.university}>
          FPT University
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Chào mừng trở lại!
      </Text>

      <Text style={styles.subtitle}>
        Đăng nhập để tiếp tục hành trình học tập của bạn.
      </Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Email */}
        <Text style={styles.label}>
          Email Sinh viên
        </Text>

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="email"
            size={22}
            color="#666"
          />

          <TextInput
            placeholder="student@fpt.edu.vn"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>
          Mật khẩu
        </Text>

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="lock"
            size={22}
            color="#666"
          />

          <TextInput
            placeholder="••••••••"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Forgot */}
        <TouchableOpacity>
          <Text style={styles.forgot}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
            Đăng nhập
          </Text>
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.or}>
          HOẶC
        </Text>

        {/* Google */}
        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome
            name="google"
            size={20}
            color="#1e3a8a"
          />

          <Text style={styles.googleText}>
            Đăng nhập bằng Google
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notice */}
      <View style={styles.noticeBox}>
        <Text style={styles.noticeTitle}>
          Thông báo mới
        </Text>

        <Text style={styles.noticeText}>
          Hệ thống LMS đã được cập nhật phiên bản 2.5.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.smallLogo}>
          <Text style={styles.smallLogoText}>
            FPT
          </Text>
        </View>

        <Text style={styles.footerText}>
          Powered by FPT Education
        </Text>
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
    paddingTop: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  fakeLogo: {
    backgroundColor: "#f97316",
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  university: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d97706",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    color: "#666",
    lineHeight: 26,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#eee",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },

  forgot: {
    textAlign: "right",
    color: "#d97706",
    fontWeight: "600",
    marginBottom: 24,
  },

  loginButton: {
    backgroundColor: "#f97316",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
    fontWeight: "600",
  },

  googleButton: {
    borderWidth: 1,
    borderColor: "#1e3a8a",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  googleText: {
    color: "#1e3a8a",
    fontWeight: "600",
    fontSize: 17,
  },

  noticeBox: {
    marginTop: 30,
    backgroundColor: "#fff7ed",
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 6,
    borderLeftColor: "#ea580c",
  },

  noticeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  noticeText: {
    color: "#444",
    lineHeight: 24,
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
  },

  smallLogo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f97316",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  smallLogoText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footerText: {
    color: "#888",
  },
});