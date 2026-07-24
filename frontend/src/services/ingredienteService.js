import api from "./api";

export const getIngredientes = async () => {
    const response = await api.get("/ingredientes");
    return response.data;
};

export const getIngredientes = async () => {
    const response = await api.get("/ingredientes");
    return response.data;
};

export const getIngredientePorId = async (id) => {
    const response = await api.get(`/ingredientes/${id}`);
    return response.data;
};

export const crearIngrediente = async (ingredienteData) => {
    const response = await api.post("/ingredientes", ingredienteData);
    return response.data;
};

export const actualizarIngrediente = async (id, ingredienteData) => {
    const response = await api.put(`/ingredientes/${id}`, ingredienteData);
    return response.data;
    };

export const eliminarIngrediente = async (id) => {
    const response = await api.delete(`/ingredientes/${id}`);
    return response.data;
};