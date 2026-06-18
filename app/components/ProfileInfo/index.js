import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileInfo({ name, bio, avatarUrl, onEditAvatar }) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarGradientBorder}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          </View>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={onEditAvatar}>
          <MaterialIcons name="edit" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userBio}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginVertical: 16,
    gap: 12,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarGradientBorder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    padding: 3,
    shadowColor: '#6b38d4',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
  },
  avatarContainer: {
    flex: 1,
    borderRadius: 60,
    backgroundColor: '#ffffff',
    padding: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 58,
  },
  editButton: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#6b38d4',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  userInfo: {
    alignItems: 'center',
    gap: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1c1c',
  },
  userBio: {
    fontSize: 16,
    color: '#5d5d67',
    textAlign: 'center',
    maxWidth: 280,
  },
});