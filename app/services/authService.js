import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorage from './asyncStorage';
const AUTH_KEY = '@auth_data';
const BASE_URL = 'https://from-majorette-subtype.ngrok-free.dev/api';

const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();

        if (response.ok) {
            await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(data));
            return data;
        } else {
            throw new Error(data.message || 'Error en el login');
        }
}

const registerUser = async (name, email, password, fechaNacimiento) => {
    const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, fechaNacimiento}),
    });
    
    const data = await response.json();
    
    if(response.ok) {
        return data;
    }else{
        throw new Error(data.message || 'Error en el registro');
    }
}
const getPerfil = async () => {
    const sesion = await asyncStorage.getData(AUTH_KEY);
    const id = sesion?.user?._id || "6a220cb141f2c5eb2c6fbb99";
    const tokenLimpio = sesion?.token;
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${tokenLimpio}`,
            'ngrok-skip-browser-warning': 'true'
        },
    });
    const data = await response.json();
    if(response.ok){
        return data;
    }else{
        throw new Error(data.message || 'Error al obtener el perfil');
    }
}
export default { login, AUTH_KEY, registerUser, BASE_URL, getPerfil };