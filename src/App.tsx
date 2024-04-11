import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeRouter } from "react-router-native"
import Auth from './views/auth/Auth';

export default function App() {
  const [text, setText] = useState("")
  return (
    <NativeRouter >
      <Auth />
    </NativeRouter>
  );
}

