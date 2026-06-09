import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const HistoryCard = ({ name, meta, image, isCompleted }) => {
  return (
    <Pressable style={[styles.historyCard, !isCompleted && { opacity: 0.6 }]}>
      <Image
        source={{ uri: image }}
        style={[styles.historyImage, !isCompleted && styles.grayscalePlaceholder]}
      />
      <View style={styles.historyInfo}>
        <Text style={styles.historyName} numberOfLines={1}>{name}</Text>
        <Text style={styles.historyMeta}>{meta}</Text>
      </View>
      <View 
        style={[
          styles.statusIconWrapper, 
          { backgroundColor: isCompleted ? 'rgba(0,133,91,0.1)' : '#e3e1ed' }
        ]}
      >
        <MaterialIcons 
          name={isCompleted ? "check-circle" : "history"} 
          size={22} 
          color={isCompleted ? "#00855b" : "#5d5d67"} 
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    gap: 16,
    shadowColor: '#6b38d4',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  historyImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  grayscalePlaceholder: {
    opacity: 0.5, 
  },
  historyInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  historyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1c1c',
    marginBottom: 4,
  },
  historyMeta: {
    fontSize: 12,
    color: '#5d5d67',
  },
  statusIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistoryCard;