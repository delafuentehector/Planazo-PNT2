import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileHistory({ historyItems = [] }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Historial de Planazos</Text>
      <View style={styles.historyList}>
        {historyItems.map((item) => {
          const isPast = item.status === 'past';
          
          return (
            <Pressable 
              key={item.id} 
              style={[styles.historyCard, isPast && { opacity: 0.6 }]}
            >
              <Image
                source={{ uri: item.image }}
                style={[styles.historyImage, isPast && styles.grayscalePlaceholder]}
              />
              <View style={styles.historyInfo}>
                <Text style={styles.historyName} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.historyMeta}>
                  {item.date} • {item.location}
                </Text>
              </View>
              <View 
                style={[
                  styles.statusIconWrapper, 
                  { backgroundColor: isPast ? '#e3e1ed' : 'rgba(0,133,91,0.1)' }
                ]}
              >
                <MaterialIcons 
                  name={isPast ? "history" : "check-circle"} 
                  size={22} 
                  color={isPast ? "#5d5d67" : "#00855b"} 
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1c1c',
  },
  historyList: {
    gap: 12,
  },
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