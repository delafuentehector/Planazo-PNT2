import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import authService from '../services/authService';

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // Para ocultar/mostrar contraseña

  const handleRegister = async () => {
    if (!fullName || !birthDate || !email || !password || !confirmPassword) {
      alert('Che, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try{
      const response = await authService.registerUser(fullName, email, password, birthDate);
      if(response) {
        alert('Registro exitoso');
        router.replace('/login');
      }
    }catch(error){
      alert('Error en el registro: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Usamos ScrollView para que no se corte la pantalla al abrir el teclado */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header / Barra Superior */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Planazo</Text>
          <View style={{ width: 28 }} /> {/* Spacer de equilibrio */}
        </View>

        {/* Sección de Identidad */}
        <View style={styles.identitySection}>
          <Text style={styles.title}>Crea tu cuenta</Text>
          <Text style={styles.subtitle}>Empieza a disfrutar de los mejores planes</Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          
          {/* Nombre Completo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre completo</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="person-outline" size={20} color="#7b7486" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ej. Juan Pérez"
                placeholderTextColor="#cbc3d7"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

          {/* Fecha de Nacimiento */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fecha de nacimiento</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="calendar-today" size={20} color="#7b7486" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="AAAA-MM-DD"
                placeholderTextColor="#cbc3d7"
                value={birthDate}
                onChangeText={setBirthDate}
              />
            </View>
          </View>

          {/* Correo Electrónico */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="mail-outline" size={20} color="#7b7486" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="tu@email.com"
                placeholderTextColor="#cbc3d7"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Contraseña */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock-outline" size={20} color="#7b7486" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#cbc3d7"
                secureTextEntry={secureText}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <MaterialIcons 
                  name={secureText ? "visibility" : "visibility-off"} 
                  size={20} 
                  color="#7b7486" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirmar Contraseña */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock-outline" size={20} color="#7b7486" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#cbc3d7"
                secureTextEntry={secureText}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          {/* Botón Principal */}
          <Pressable style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </Pressable>
        </View>

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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#6b38d4',
  },
  identitySection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1c1c',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#494454',
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#494454',
    paddingHorizontal: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1c1c',
  },
  registerButton: {
    backgroundColor: '#6b38d4',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
});