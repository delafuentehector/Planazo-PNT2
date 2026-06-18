import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = ({ titulo }) => {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
      </View>
      <Text style={styles.logo}>{titulo}</Text>
      <TouchableOpacity style={styles.notificationButton}>
        <Text style={styles.notificationIcon}>🔔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  profileContainer: { width: 40, height: 40, borderRadius: 20, overflow: "hidden" },
  profileImage: { width: "100%", height: "100%" },
  logo: { fontSize: 28, fontWeight: "bold", color: "#6B38D4" },
  notificationButton: { width: 40, height: 40, justifyContent: "center", alignItems: "center" },
  notificationIcon: { fontSize: 22 },
});

export default Header;