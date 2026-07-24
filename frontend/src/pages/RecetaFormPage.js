import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function RecetaFormPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ titulo: '', descripcion: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('/recetas', form)
      .then(() => navigate('/recetas'))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>Nueva Receta</h1>
      <input
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  )
}

export default RecetaFormPage