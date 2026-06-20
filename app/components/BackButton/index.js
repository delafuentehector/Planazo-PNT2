import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const DEFAULT_COLOR = '#6b38d4';
const DEFAULT_SIZE = 28;

const BackButton = ({ onPress, color = DEFAULT_COLOR, size = DEFAULT_SIZE, style }) => {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, style]}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Volver"
    >
      <MaterialIcons name="arrow-back" size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
