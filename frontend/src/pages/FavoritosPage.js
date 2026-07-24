import { useEffect, useState } from 'react'
import { getFavoritos, eliminarFavorito } from '../services/favoritoService'
import RecetaCard from '../components/ui/RecetaCard'

    function FavoritosPage() {
    const [favoritos, setFavoritos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFavoritos()
        .then(res => setFavoritos(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, [])

    const handleEliminar = (recetaId) => {
        eliminarFavorito(recetaId)
        .then(() => setFavoritos(favoritos.filter(f => f.id !== recetaId)))
        .catch(err => console.error(err))
    }

    if (loading) return <p>Cargando...</p>

    return (
        <div>
        <h1>Mis Favoritos</h1>
        {favoritos.length === 0
            ? <p>No tenés favoritos todavía</p>
            : favoritos.map(receta => (
                <RecetaCard
                key={receta.id}
                receta={receta}
                onEliminar={() => handleEliminar(receta.id)}
                />
            ))
        }
        </div>
    )
    }

export default FavoritosPage