import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SuggestionCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardOverlay} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  card: { width: 170, height: 220, borderRadius: 30, overflow: "hidden", marginRight: 16, justifyContent: "flex-end" },
  cardImage: { width: "100%", height: "100%", position: "absolute" },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.3)" },
  cardTitle: { color: "white", fontSize: 20, fontWeight: "bold", padding: 16 },
});

export default SuggestionCard;