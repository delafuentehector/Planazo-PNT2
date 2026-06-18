import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const ActionCard = ({ title, subtitle, icon, onPress, variant = "primary" }) => {
  const isPrimary = variant === "primary";

  return (
    <Pressable 
      style={[styles.button, isPrimary ? styles.primaryBtn : styles.secondaryBtn]} 
      onPress={onPress}
    >
      <View style={[styles.iconContainer, isPrimary ? styles.primaryIcon : styles.secondaryIcon]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={[styles.title, isPrimary ? styles.textWhite : styles.textDark]}>{title}</Text>
      <Text style={[styles.subtitle, isPrimary ? styles.subWhite : styles.subDark]}>{subtitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 30, padding: 24, alignItems: "center" },
  primaryBtn: { backgroundColor: "#6B38D4" },
  secondaryBtn: { backgroundColor: "white" },
  iconContainer: { width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center", marginBottom: 12 },
  primaryIcon: { backgroundColor: "rgba(255,255,255,0.2)" },
  secondaryIcon: { backgroundColor: "#E9DDFF" },
  icon: { fontSize: 28 },
  title: { fontSize: 20, fontWeight: "bold" },
  textWhite: { color: "white" },
  textDark: { color: "#222" },
  subtitle: { marginTop: 6, textAlign: 'center' },
  subWhite: { color: "rgba(255,255,255,0.8)" },
  subDark: { color: "#666" },
});


export default ActionCard;