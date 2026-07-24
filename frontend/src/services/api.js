import axios from "axios"; // para usar el codigo que trae axios

const api = axios.create({ // todo lo que hagamos va a pasae a traves de esta constante,
    baseURL: "http://localhost:3001/api", 
});

api.interceptors.request.use((config) => { // token del usuario automatico en cada peticion
    const token = localStorage.getItem("token");// ccaja del navegador que guarda datos aunque cierres o recargues la pagina
    if (token) { // condicional para trabajar si el usuario tiene token
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // se devuelve confing para que el pedido salga 
    });
    
    export default api; // para que otros archivos puedan importar esto