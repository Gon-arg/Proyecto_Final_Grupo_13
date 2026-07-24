import api from "./api";

export const login = async (email, password) => { // crea la funcion y la exporta al mismo tiempo para que despues useAuth la pueda importar despues
                                                  //async es una funcion que tarda  
    const response = await api.post("/auth/login", { email, password });// await le dice a js que espere a que el back responde antes de seguir 
    return response.data; // devuele especifacmente lo que necesitamos, no todo el objeto 
};

export const register = async (userData) => {
    const response = await api.post("/auth/register", userData); // manda los datos de registro a api.post
    return response.data;
};