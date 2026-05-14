import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('student@fpt.edu.vn');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    Alert.alert('Đăng nhập', `Chào mừng ${email} quay trở lại!`);
  };

  const handleGoogleLogin = () => {
    Alert.alert('Đăng nhập Google', 'Tính năng đang được phát triển.');
  };

  const handleForgotPassword = () => {
    Alert.alert('Quên mật khẩu', 'Vui lòng kiểm tra email để đặt lại mật khẩu.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fc" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.smallLogoContainer}>
                <Text style={styles.smallLogo}>🎓</Text>
              </View>

              <Text style={styles.universityName}>
                FPT University
              </Text>
            </View>
          </View>
          {/* Welcome */}
          <View style={styles.welcome}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>🎓</Text>
            </View>
            <Text style={styles.welcomeTitle}>Chào mừng trở lại!</Text>
            <Text style={styles.welcomeSubtitle}>
              Đăng nhập để tiếp tục hành trình học tập của bạn.
            </Text>
          </View>
          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Email Sinh viên</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="student@fpt.edu.vn"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.label}>Mật khẩu</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotContainer}
            >
              <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            {/* Nút Đăng nhập (Cam) */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          {/* HOẶC + Google */}
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>HOẶC</Text>
            <View style={styles.orLine} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleLogin}
          >
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
          </TouchableOpacity>

          {/* Thông báo */}
          <View style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>📢 Thông báo mới</Text>
            <Text style={styles.notificationContent}>
              Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email để biết thêm chi tiết.
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.copyright}>
              © 2024 FPT University. Academic Innovation Core.
            </Text>
            <View style={styles.footerLinks}>
              <Text style={styles.footerLink}>Privacy Policy</Text>
              <Text style={styles.footerSeparator}> | </Text>
              <Text style={styles.footerLink}>Terms of Service</Text>
              <Text style={styles.footerSeparator}> | </Text>
              <Text style={styles.footerLink}>Help Center</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fc' },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    paddingBottom: 16,
    marginBottom: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallLogoContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 12,
  },

  smallLogo: {
    fontSize: 20,
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 12,
  },
  welcome: { alignItems: 'center', marginBottom: 32 },
  logo: { fontSize: 40 },
  universityName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#c84a10',
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  form: { marginBottom: 24 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  eyeText: { fontSize: 20 },
  forgotContainer: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#c8102e', fontWeight: '500' },
  loginButton: {
    backgroundColor: '#ff6600', 
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  orText: {
    marginHorizontal: 16,
    color: '#64748b',
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#4285f4',
    borderRadius: 12,
    paddingVertical: 13,
    gap: 10,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285f4',
  },
  googleButtonText: {
    color: '#4285f4',
    fontSize: 16,
    fontWeight: '600',
  },
  notificationCard: {
    backgroundColor: '#fff4e5',
    borderLeftWidth: 5,
    borderLeftColor: '#ff6600',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  notificationContent: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  footer: { marginTop: 40, alignItems: 'center' },
  copyright: { fontSize: 12, color: '#94a3b8', marginBottom: 8 },
  footerLinks: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  footerLink: { fontSize: 12, color: '#c8102e' },
  footerSeparator: { fontSize: 12, color: '#ddd', marginHorizontal: 8 },
});