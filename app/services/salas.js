import authService from './authService';
import asyncStorage from './asyncStorage';

const crearSala = async (nombre, tipoAct, restricciones, intereses, ubicacion, fecha, hora, presupuesto) => {
    try{
        // const idHost = "6a220cb141f2c5eb2c6fbb99"; 
        
        const sesion = await asyncStorage.getData(authService.AUTH_KEY); // problema almacenando el token
        const idHost = sesion?.user?.id || "6a220cb141f2c5eb2c6fbb99";  
        const tokenLimpio = sesion?.token;
        const response = await fetch(`${authService.BASE_URL}/salas/crearSala`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${tokenLimpio}`,
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({ idHost, nombre, tipoAct, restricciones, intereses, ubicacion, fecha, hora, presupuesto }),
        });
        
        const data = await response.json();
        
        if(response.ok) {
            return data;
        } else {
            throw new Error(data.message || 'Error creando la sala');
        }
        } catch (error) {
            console.error('Error creando la sala:', error);
    }
}

export default { crearSala };