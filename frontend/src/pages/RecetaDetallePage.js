import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecetaPorId } from "../services/recetaService";

function RecetaDetallePage() {
    const { id } = useParams();
    const [receta, setReceta] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    const cargarReceta = async () => {
        try {
            const data = await getRecetaPorId(id);
            setReceta(data);
        } catch (err) {
            console.error("Error al cargar la receta", err);
        } finally {
            setCargando(false);
        }
        };
        cargarReceta();
    }, [id]);

    if (cargando) {
    return <p>Cargando receta...</p>;
}

    if (!receta) {
        return <p>No se encontró la receta</p>;
    }

    return (
        <div>
        <h1>{receta.nombre}</h1>
        <p>{receta.descripcion}</p>
        <h3>Ingredientes</h3>
        <ul>
            {receta.ingredientes?.map((ing) => (
            <li key={ing.id}>{ing.nombre}</li>
            ))}
        </ul>
        </div>
    );
}

export default RecetaDetallePage;

