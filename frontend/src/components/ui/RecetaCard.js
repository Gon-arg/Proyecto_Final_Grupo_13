function RecetaCard({ receta, onEliminar }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem' }}>
      <h3>{receta.titulo}</h3>
      <p>{receta.descripcion}</p>
      {onEliminar && (
        <button onClick={onEliminar}>❌ Quitar</button>
      )}
    </div>
  )
}

export default RecetaCard