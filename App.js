import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/login';
import HomeScreen from './app/(tabs)/index';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});