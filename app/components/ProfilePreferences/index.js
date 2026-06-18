import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfilePreferences({ preferences = [], onEdit }) {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mis Preferencias</Text>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.editLink}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tagContainer}>
        {preferences.map((pref, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{pref}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 16,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1c1c',
  },
  editLink: {
    color: '#6b38d4',
    fontSize: 14,
    fontWeight: '600',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: 'rgba(132, 85, 239, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(132, 85, 239, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#8455ef',
    fontSize: 14,
    fontWeight: '600',
  },
});