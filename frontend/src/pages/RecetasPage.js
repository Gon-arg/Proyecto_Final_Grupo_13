import { useState, useEffect } from "react";
import { getRecetas } from "../services/recetaService";

function RecetasPage() {
    const [recetas, setRecetas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    const cargarRecetas = async () => {
        try {
            const data = await getRecetas();
            setRecetas(data);
        } catch (err) {
            console.error("Error al cargar recetas", err);
        } finally {
            setCargando(false);
        }
        };
        cargarRecetas();
    }, []);

    if (cargando) {
    return <p>Cargando recetas...</p>;
    }

    return (
        <div>
        <h1>Recetas</h1>
        <ul>
            {recetas.map((receta) => (
            <li key={receta.id}>{receta.nombre}</li>
            ))}
        </ul>
        </div>
    );
}

export default RecetasPage;