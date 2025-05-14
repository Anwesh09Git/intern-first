import React from 'react';
import { SafeAreaView } from 'react-native';
import AuthScreen from './src/screens/AuthScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthScreen />
    </SafeAreaView>
  );
}
