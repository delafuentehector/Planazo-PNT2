import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/index';
import HomeScreen from './app/home';

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