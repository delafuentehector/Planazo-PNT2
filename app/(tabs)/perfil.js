import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header'; 
import ProfileInfo from '../components/ProfileInfo';
import ProfilePreferences from '../components/ProfilePreferences';
import ProfileHistory from '../components/ProfileHistory';
import { TouchableOpacity, Text } from 'react-native';
import asyncStorage from '../services/asyncStorage';
import { useAuth } from '../hooks/useAuth';
import authService from '../services/authService';
import { useState, useEffect } from 'react';

export default function ProfileScreen() {  
  const { setAuth } = useAuth();
  const [perfil, setPerfil] = useState(null);
  useEffect(() => {
    authService.getPerfil()
      .then(setPerfil)
      .catch(console.error);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        titulo='Perfil'
        onNotificationPress={() => console.log('Abrir notificaciones')}
      />
      
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProfileInfo 
          name={perfil?.name} 
          email={perfil?.email}
          birthdate={perfil?.fechaNacimiento}
          avatarUrl={perfil?.foto || 'https://i.pinimg.com/originals/0f/78/5d/0f785d55cea2a407ac8c1d0c6ef19292.jpg'}
          onEditAvatar={() => console.log('Editar avatar')}
        />

        <ProfilePreferences 
          preferences={perfil?.preferencias} 
          onEdit={() => console.log('Editar preferencias')}
        />

        <ProfileHistory historialPlanes={perfil?.historialPlanes} />

        <TouchableOpacity style={styles.loginButton} onPress={()=> setAuth(null)}>
          <Text style={styles.loginText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  loginButton: {
    backgroundColor: '#6B38D4',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});