import authService from './authService';
import asyncStorage from './asyncStorage';

const crearSala = async (nombre, tipoAct, restricciones, intereses, ubicacion, fecha, hora, presupuesto) => {
    try{
        const sesion = await asyncStorage.getData(authService.AUTH_KEY); // problema almacenando el token
        const idHost = sesion?.user?._id || "6a220cb141f2c5eb2c6fbb99";  
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

const unirseSala = async (codigoInvitacion) => {
    const sesion = await asyncStorage.getData(authService.AUTH_KEY); // problema almacenando el token
    const idParticipante = sesion?.user?._id || "6a220cb141f2c5eb2c6fbb99";  
    const tokenLimpio = sesion?.token;
    console.log('Uniendo sala con:', { tokenLimpio, idParticipante });
    const response = await fetch(`${authService.BASE_URL}/salas/agregarParticipante/${codigoInvitacion}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokenLimpio}`,
        'ngrok-skip-browser-warning': 'true'
    },
    body: JSON.stringify({ idParticipante }),
    });

    const data = await response.json();

    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message || 'Error uniendo la sala');
    }
}

const comenzarVotacion = async (idSala) => {
    const sesion = await asyncStorage.getData(authService.AUTH_KEY); 
    const tokenLimpio = sesion?.token;
    const response = await fetch(`${authService.BASE_URL}/salas/sugerir/${idSala}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokenLimpio}`,
        'ngrok-skip-browser-warning': 'true'
    },
    });

    const data = await response.json();

    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }
}

const obtenerPlanes = async (id) => {
    const sesion = await asyncStorage.getData(authService.AUTH_KEY); 
    const tokenLimpio = sesion?.token;
    const response = await fetch(`${authService.BASE_URL}/salas/obtenerPlanes/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokenLimpio}`,
        'ngrok-skip-browser-warning': 'true'
    },
    });
    
    const data = await response.json();
    
    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message || 'Error al obtener los planes');
    }
}

const votarPlan = async (idSala, idPlan) => {
    const sesion = await asyncStorage.getData(authService.AUTH_KEY); 
    const tokenLimpio = sesion?.token;
    const response = await fetch(`${authService.BASE_URL}/salas/${idSala}/votarPlan/${idPlan}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokenLimpio}`,
        'ngrok-skip-browser-warning': 'true'
    },
    });
    
    const data = await response.json();
    
    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message || 'Error al votar el plan');
    }
}

const obtenerPlanGanador = async (idSala) => {
    const sesion = await asyncStorage.getData(authService.AUTH_KEY);
    const tokenLimpio = sesion?.token;
    const response = await fetch(`${authService.BASE_URL}/salas/planGanador/${idSala}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokenLimpio}`,
        'ngrok-skip-browser-warning': 'true'
    },
    });
    const data = await response.json();
    console.log(data.ganador);
    if(response.ok) {
        return data?.ganador;
    } else {
        throw new Error(data.message || 'Error al obtener el plan ganador');
    }
}
export default { crearSala, unirseSala, comenzarVotacion, obtenerPlanes, votarPlan, obtenerPlanGanador };