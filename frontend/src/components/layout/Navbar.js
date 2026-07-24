import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/recetas">Recetas</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/menu">Menú</Link>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  )
}

export default Navbar