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
  const [preferencias, setPreferencia] = useState([]);
  const [nuevaPreferencia, setNuevaPreferencia] = useState('');

  const handleAgregarPreferencia = () => {
    setPreferencia([...preferencias, nuevaPreferencia]);
    setNuevaPreferencia('');

};

const handleEliminarPreferencia = (tagAEliminar) => {
setPreferencia(preferencias.filter(tag => tag !== tagAEliminar));
};

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

      <View style={styles.section}>
      <Text style={styles.label}>Mis preferencias</Text>

      <View style={styles.tagsContainer}>
        {preferencias.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={styles.tag}
            onPress={() => handleEliminarPreferencia(tag)}
          >
            <Text style={styles.tagText}>#{tag} ✕</Text>
          </TouchableOpacity>
        ))}

        <TextInput
          placeholder="+ Añadir"
          style={styles.addTag}
          placeholderTextColor="#999"
          value={nuevaPreferencia}
          onChangeText={setNuevaPreferencia}
          onSubmitEditing={handleAgregarPreferencia}
        />
      </View>
    </View>

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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tag: {
    backgroundColor: '#E9DDFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },

  tagText: {
    color: '#5516BE',
    fontWeight: '600',
  },

  addTag: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D8C9FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
  },

  addTagText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  section: {
    marginBottom: 28,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },

  input: {
    backgroundColor: '#F5F3FF',
    borderRadius: 18,
    padding: 18,
    fontSize: 16,
  },

});