const { Ingrediente, Receta } = require('../models')

// POST /api/recetas/:id/ingredientes
const agregarIngrediente = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, cantidad, unidad } = req.body

        if (!nombre || !cantidad || !unidad) {
        return res.status(400).json({ error: 'Nombre, cantidad y unidad son obligatorios' })
        }

        const receta = await Receta.findByPk(id)

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        if (receta.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para modificar esta receta' })
        }

        const ingrediente = await Ingrediente.create({
        nombre,
        cantidad,
        unidad,
        recetaId: id
        })

        return res.status(201).json(ingrediente)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo agregar el ingrediente' })
    }
    }

    // DELETE /api/ingredientes/:id
    const eliminarIngrediente = async (req, res) => {
    try {
        const { id } = req.params

        const ingrediente = await Ingrediente.findByPk(id)

        if (!ingrediente) {
        return res.status(404).json({ error: 'Ingrediente no encontrado' })
        }

        const receta = await Receta.findByPk(ingrediente.recetaId)

        if (receta.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para eliminar este ingrediente' })
        }

        await ingrediente.destroy()

        return res.status(200).json({ message: 'Ingrediente eliminado correctamente' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo eliminar el ingrediente' })
    }
    }

    module.exports = {
    agregarIngrediente,
    eliminarIngrediente
    }