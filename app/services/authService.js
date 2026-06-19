import AsyncStorage from '@react-native-async-storage/async-storage';
const AUTH_KEY = '@auth_data';
const BASE_URL = 'https://occupancy-frivolous-subfloor.ngrok-free.dev/api';

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

export default { login, AUTH_KEY, registerUser };