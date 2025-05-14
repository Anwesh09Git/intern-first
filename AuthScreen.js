import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('Parent');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Smile2Steps</Text>

      {/* Role Toggle */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, role === 'Parent' && styles.activeTab]}
          onPress={() => setRole('Parent')}
        >
          <Text style={styles.tabText}>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, role === 'Pediatrician' && styles.activeTab]}
          onPress={() => setRole('Pediatrician')}
        >
          <Text style={styles.tabText}>Pediatrician</Text>
        </TouchableOpacity>
      </View>

      {isLogin ? (
        <LoginForm role={role} switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm role={role} switchForm={() => setIsLogin(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  tab: { padding: 10, marginHorizontal: 5, borderRadius: 5, borderWidth: 1 },
  activeTab: { backgroundColor: '#007bff', borderColor: '#007bff' },
  tabText: { color: '#fff' },
});
