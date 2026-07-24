import api from './api'

export const getMenu = () => api.get('/menu')
export const agregarAlMenu = (datos) => api.post('/menu', datos)
export const eliminarDelMenu = (id) => api.delete(`/menu/${id}`)