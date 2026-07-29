import { useEffect, useState } from 'react'
import { getMenu, eliminarDelMenu } from '../services/menuService'

function MenuPage() {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMenu()
      .then(res => setMenu(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const handleEliminar = (id) => {
    eliminarDelMenu(id)
      .then(() => setMenu(menu.filter(item => item.id !== id)))
      .catch(err => console.error(err))
  }

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Menú Semanal</h1>
      {menu.length === 0
        ? <p>No hay nada en el menú</p>
        : menu.map(item => (
            <div key={item.id}>
              <p>{item.dia} — {item.receta?.titulo}</p>
              <button onClick={() => handleEliminar(item.id)}>Quitar</button>
            </div>
          ))
      }
    </div>
  )
}

export default MenuPage