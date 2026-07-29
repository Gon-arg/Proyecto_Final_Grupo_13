const { Receta, Ingrediente } = require('../models')

// GET /api/recetas
const getRecetas = async (req, res) => {
    try {
        const { tipo } = req.query 

        const filtro = { userId: req.user.id }// // filtro para usuarios logueados para que cada usuario solo vea sus recetas
        if (tipo) filtro.tipo = tipo // si el usuario mando un tipo en la url se agrega al filtro tambien

        const recetas = await Receta.findAll({
        where: filtro
        })

        return res.status(200).json(recetas)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudieron obtener las recetas' })
    }
    }

    // GET /api/recetas/:id
    const getRecetaById = async (req, res) => {
    try {
        const { id } = req.params

        const receta = await Receta.findByPk(id, {
        include: [Ingrediente]
        })

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        return res.status(200).json(receta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo obtener la receta' })
    }
    }

    // POST /api/recetas
    const crearReceta = async (req, res) => {
    try {
        const { titulo, descripcion, tipo, instrucciones } = req.body

        if (!titulo || !tipo) {
        return res.status(400).json({ error: 'El titulo y el tipo son obligatorios' })
        }

        const receta = await Receta.create({
        titulo,
        descripcion,
        tipo,
        instrucciones,
        userId: req.user.id
        })

        return res.status(201).json(receta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo crear la receta' })
    }
    }

    // PUT /api/recetas/:id
    const actualizarReceta = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, descripcion, tipo, instrucciones } = req.body

        const receta = await Receta.findByPk(id)

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        if (receta.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para editar esta receta' })
        }

        await receta.update({ titulo, descripcion, tipo, instrucciones })

        return res.status(200).json(receta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo actualizar la receta' })
    }
    }

    // DELETE /api/recetas/:id
    const eliminarReceta = async (req, res) => {
    try {
        const { id } = req.params

        const receta = await Receta.findByPk(id)

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        if (receta.userId !== req.user.id) {
        return res.status(403).json({ error: 'No tenés permiso para eliminar esta receta' })
        }

        await receta.destroy()

        return res.status(200).json({ message: 'Receta eliminada correctamente' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo eliminar la receta' })
    }
    }

    module.exports = {
    getRecetas,
    getRecetaById,
    crearReceta,
    actualizarReceta,
    eliminarReceta
    }