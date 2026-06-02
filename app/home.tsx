import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="school-outline" size={32} color="#913312" />
        <Text style={styles.title}>FPT University</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.welcome}>Xin chào, {user?.name || 'Sinh viên'}!</Text>
        <Text style={styles.email}>{user?.email}</Text>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#913312',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 32,
  },
  logoutButton: {
    backgroundColor: '#F27024',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
