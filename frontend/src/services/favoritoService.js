import api from './api'

export const getFavoritos = () => api.get('/favoritos')
export const agregarFavorito = (recetaId) => api.post(`/favoritos/${recetaId}`)
export const eliminarFavorito = (recetaId) => api.delete(`/favoritos/${recetaId}`)