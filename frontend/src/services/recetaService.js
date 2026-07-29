import api from "./api";

export const getRecetas = async () => {
    const response = await api.get("/recetas");
    return response.data;
};

export const getRecetaPorId = async (id) => {
    const response = await api.get(`/recetas/${id}`);
    return response.data;
};

export const crearReceta = async (recetaData) => {
    const response = await api.post("/recetas", recetaData);
    return response.data;
};

export const actualizarReceta = async (id, recetaData) => {
    const response = await api.put(`/recetas/${id}`, recetaData);
    return response.data;
};

export const eliminarReceta = async (id) => {
    const response = await api.delete(`/recetas/${id}`);
    return response.data;
};