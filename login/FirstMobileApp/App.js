import { StatusBar } from "expo-status-bar";


import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      
      <View style={styles.header}>
        
        <Feather name="box" size={28} color="#8b3a12" />

        <Text style={styles.logoText}>FPT University</Text>
      </View>

      
      <View style={styles.heroIcon}>
        
        <Feather name="box" size={42} color="#9b3a10" />
      </View>

      <Text style={styles.title}>Chào mừng trở lại!</Text>

      <Text style={styles.subtitle}>
        Đăng nhập để tiếp tục hành trình học tập của bạn.
      </Text>

      
      <View style={styles.card}>
        <Text style={styles.label}>Email Sinh viên</Text>

        <View style={styles.inputBox}>
          
          <MaterialIcons
            name="email"
            size={24}
            color="#4a2a1e"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="student@fpt.edu.vn"
            placeholderTextColor="#8b7f78"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Mật khẩu</Text>

        <View style={styles.inputBox}>
          
          <Feather
            name="lock"
            size={22}
            color="#4a2a1e"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#4a3b33"
            secureTextEntry
          />

          
          <Ionicons name="eye-outline" size={24} color="#3e3028" />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>

        
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.or}>HOẶC</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleBtn}>
          
          <FontAwesome5 name="google" size={22} color="#17435f" />

          <Text style={styles.googleText}>Đăng nhập bằng Google</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.notice}>
        
        <Feather name="bell" size={22} color="#b64613" />

        <View style={{ flex: 1 }}>
          <Text style={styles.noticeTitle}>Thông báo mới</Text>
          <Text style={styles.noticeText}>
            Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email
            để biết thêm chi tiết.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          © 2024 FPT University. Academic Innovation Core.
        </Text>

        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
          <Text style={styles.footerLink}>Terms of Service</Text>
          <Text style={styles.footerLink}>Help Center</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 28,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 120,
  },

  logoText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#7a2f0b",
  },

  heroIcon: {
    width: 86,
    height: 86,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 18,
    elevation: 3,
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#0e1116",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    color: "#6d625d",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 56,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 3,
    marginBottom: 64,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#33231c",
    marginBottom: 10,
  },

  inputBox: {
    height: 66,
    borderWidth: 1,
    borderColor: "#d5b8aa",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 18,
    backgroundColor: "#f8f7fb",
  },

  
  inputIcon: {
    marginRight: 14,
  },

  input: {
    flex: 1,
    fontSize: 20,
    color: "#2d2520",
  },

  forgot: {
    color: "#8b3a12",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 28,
  },

  loginBtn: {
    backgroundColor: "#ff6817",
    height: 70,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#d5d0ca",
  },

  or: {
    marginHorizontal: 22,
    color: "#5b504b",
    fontWeight: "700",
  },

  googleBtn: {
    height: 70,
    borderWidth: 2,
    borderColor: "#17435f",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },

  googleText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#173b55",
  },

  notice: {
    flexDirection: "row",
    backgroundColor: "#fff1ea",
    borderLeftWidth: 5,
    borderLeftColor: "#b64613",
    padding: 22,
    borderRadius: 4,
    marginBottom: 120,
    gap: 16,
  },

  noticeTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#2a1710",
  },

  noticeText: {
    fontSize: 18,
    color: "#5f4a42",
    lineHeight: 26,
  },

  footer: {
    alignItems: "center",
  },

  copyright: {
    fontSize: 16,
    color: "#8a929c",
    textAlign: "center",
    marginBottom: 16,
  },

  footerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 22,
    justifyContent: "center",
  },

  footerLink: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#3b3b3b",
  },
});