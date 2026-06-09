import {React, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import {useRouter} from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Che, completa los campos primero');
      return;
    }
    console.log('Enviando al backend...', { email, password });
    if((email === "admin@gmail.com" && password === "admin")){
      router.navigate('/home');
    }else{
      alert('Credenciales incorrectas');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logoEmoji}>P</Text>
        </View>

        <Text style={styles.title}>Planazo</Text>

        <Text style={styles.subtitle}>
          Decidilo en un minuto, WACHIN
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo o usuario</Text>

          <TextInput
            placeholder="hola@ejemplo.com"
            style={styles.input}
            placeholderTextColor="#888"
            autoCapitalize="none" 
            keyboardType="email-address" 
            value={email} 
            onChangeText={(text) => setEmail(text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>

          <TextInput
            placeholder="pensala wachin"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#888"
            autoCapitalize="none"
            value={password} 
            onChangeText={(text) => setPassword(text)} 
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ¿No tienes cuenta?
        </Text>

        <Pressable onPress={() => router.navigate('/usuario/crearUsuario')}>
          <Text style={styles.register}> 
            Regístrate gratis
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: '#6B38D4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  logoEmoji: {
    fontSize: 32,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#6B38D4',
  },

  subtitle: {
    marginTop: 8,
    color: '#666',
    textAlign: 'center',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#555',
  },

  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
  },

  forgot: {
    color: '#6B38D4',
    textAlign: 'right',
    marginBottom: 25,
    fontWeight: '600',
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

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 12,
  },

  socialContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  socialButton: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    gap: 5,
  },

  footerText: {
    color: '#666',
  },

  register: {
    color: '#6B38D4',
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 24,
    marginTop: 30,
  },
});