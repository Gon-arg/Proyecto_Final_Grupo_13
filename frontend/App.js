import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/common/PrivateRoute'
import Navbar from './components/layout/Navbar'

// Pagina de celi
import LoginPage from './pages/LoginPage'
import RecetasPage from './pages/RecetasPage'
import RegisterPage from './pages/RegisterPage'
import RecetaDetallePage from './pages/RecetaDetallePage'

// Mis páginas
import FavoritosPage from './pages/FavoritosPage'
import MenuPage from './pages/MenuPage'
import RecetaFormPage from './pages/RecetaFormPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Pública */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        

        {/* Privadas */}
        <Route path="/recetas" element={
          <PrivateRoute><RecetasPage /></PrivateRoute>
        } />
        <Route path="/recetas/nueva" element={
          <PrivateRoute><RecetaFormPage /></PrivateRoute>
        } />
        <Route path="/favoritos" element={
          <PrivateRoute><FavoritosPage /></PrivateRoute>
        } />
        <Route path="/menu" element={
          <PrivateRoute><MenuPage /></PrivateRoute>
        } />
        <Route path="/recetas" element={
          <PrivateRoute><RecetasPage /></PrivateRoute>
        } />
        <Route path="/recetas/:id" element={
          <PrivateRoute><RecetaDetallePage /></PrivateRoute>
        } />

        {/* Ruta por defecto */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
