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

// Sử dụng IP cục bộ của máy tính để đảm bảo kết nối từ điện thoại/giả lập
const API_URL = 'http://192.168.1.84:3000';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        Alert.alert('Thành công', 'Đăng ký tài khoản thành công!');
        router.back();
      } else {
        Alert.alert('Lỗi', 'Đã có lỗi xảy ra từ server.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Không thể kết nối', 
        `Không thể kết nối tới server json-server tại ${API_URL}. Bạn đã chạy json-server chưa?`
      );
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
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back-outline" size={24} color="#913312" />
            </TouchableOpacity>
            <Ionicons name="school-outline" size={24} color="#913312" />
            <Text style={styles.headerText}>FPT University</Text>
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeTitle}>Tạo tài khoản</Text>
          <Text style={styles.welcomeSubtitle}>Tham gia hành trình học tập cùng FPT.</Text>

          {/* Register Card */}
          <View style={styles.card}>
            {/* Name Input */}
            <Text style={styles.label}>Họ và Tên</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#6b7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Nguyễn Văn A"
                placeholderTextColor="#9ca3af"
                value={name}
                onChangeText={setName}
              />
            </View>

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

            {/* Register Button */}
            <TouchableOpacity 
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]} 
              activeOpacity={0.8}
              onPress={handleRegister}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>{isLoading ? 'Đang xử lý...' : 'Đăng ký'}</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Đã có tài khoản? </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.registerLink}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#913312',
    marginLeft: 8,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: '#4b5563',
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
  loginButton: {
    backgroundColor: '#F27024',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#F27024',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonDisabled: {
    backgroundColor: '#fca5a5',
    shadowOpacity: 0,
    elevation: 0,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
