import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const API_URL = 'http://192.168.1.84:3000';

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu!');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
      if (response.ok) {
        const users = await response.json();
        if (users.length > 0) {
          login(users[0]);
          Alert.alert('Thành công', `Chào mừng ${users[0].name} quay trở lại!`);
          router.replace('/home' as any);
        } else {
          Alert.alert('Lỗi', 'Email hoặc mật khẩu không đúng!');
        }
      } else {
        Alert.alert('Lỗi', 'Đã có lỗi xảy ra từ server.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi kết nối', `Không thể kết nối đến server tại ${API_URL}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="school-outline" size={24} color="#913312" />
            <Text style={styles.headerText}>FPT University</Text>
          </View>

          {/* Logo Card */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Ionicons name="school-outline" size={36} color="#913312" />
            </View>
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeTitle}>Chào mừng trở lại!</Text>
          <Text style={styles.welcomeSubtitle}>Đăng nhập để tiếp tục hành trình học tập của bạn.</Text>

          {/* Login Card */}
          <View style={styles.card}>
            {/* Email Input */}
            <Text style={styles.label}>Email Sinh viên</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#6b7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="student@fpt.edu.vn"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <Text style={styles.label}>Mật khẩu</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#6b7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity 
              style={[styles.loginButton, isLoading && { backgroundColor: '#fca5a5' }]} 
              activeOpacity={0.8}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>{isLoading ? 'Đang xử lý...' : 'Đăng nhập'}</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.registerLink}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>HOẶC</Text>
              <View style={styles.divider} />
            </View>

            {/* Google Login */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
              <Ionicons name="logo-google" size={20} color="#1e3a8a" style={styles.googleIcon} />
              <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
            </TouchableOpacity>
          </View>

          {/* Notification */}
          <View style={styles.notificationCard}>
            <View style={styles.notificationLeft}>
              <Ionicons name="megaphone-outline" size={20} color="#913312" />
            </View>
            <View style={styles.notificationRight}>
              <Text style={styles.notificationTitle}>Thông báo mới</Text>
              <Text style={styles.notificationText}>Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email để biết thêm chi tiết.</Text>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 FPT University. Academic Innovation Core.</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity><Text style={styles.footerLink}>Privacy Policy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.footerLink}>Terms of Service</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.footerLink}>Help Center</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollContent: {
    padding: 24,
    paddingTop: 40,
    paddingBottom: 100, // Space for footer
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#913312',
    marginLeft: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 20,
    height: 50,
  },
  inputIcon: {
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#111827',
  },
  eyeIcon: {
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
    marginTop: -8,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#913312',
  },
  loginButton: {
    backgroundColor: '#F27024',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#F27024',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    paddingHorizontal: 12,
    color: '#6b7280',
    fontSize: 12,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1e3a8a',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#ffffff',
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: '#1e3a8a',
    fontSize: 15,
    fontWeight: '600',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff7f2',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#913312',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationLeft: {
    marginRight: 12,
    marginTop: 2,
  },
  notificationRight: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  notificationText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  footerLink: {
    fontSize: 12,
    color: '#6b7280',
    textDecorationLine: 'underline',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: -8,
  },
  registerText: {
    color: '#4b5563',
    fontSize: 14,
  },
  registerLink: {
    color: '#F27024',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
