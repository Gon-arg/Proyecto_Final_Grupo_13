const { Favorito, Receta } = require('../models')

// GET /api/favoritos
const getFavoritos = async (req, res) => {
    try {
        const favoritos = await Favorito.findAll({
        where: { userId: req.user.id },
        include: [Receta]
        })

        return res.status(200).json(favoritos)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudieron obtener los favoritos' })
    }
    }

    // POST /api/favoritos
    const agregarFavorito = async (req, res) => {
    try {
        const { recetaId } = req.body

        if (!recetaId) {
        return res.status(400).json({ error: 'El recetaId es obligatorio' })
        }

        const receta = await Receta.findByPk(recetaId)

        if (!receta) {
        return res.status(404).json({ error: 'Receta no encontrada' })
        }

        const favoritoExistente = await Favorito.findOne({
        where: { userId: req.user.id, recetaId }
        })

        if (favoritoExistente) {
        return res.status(400).json({ error: 'Esta receta ya está en tus favoritos' })
        }

        const favorito = await Favorito.create({
        userId: req.user.id,
        recetaId
        })

        return res.status(201).json(favorito)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo agregar el favorito' })
    }
    }

    // DELETE /api/favoritos/:recetaId
    const eliminarFavorito = async (req, res) => {
    try {
        const { recetaId } = req.params

        const favorito = await Favorito.findOne({
        where: { userId: req.user.id, recetaId }
        })

        if (!favorito) {
        return res.status(404).json({ error: 'Favorito no encontrado' })
        }

        await favorito.destroy()

        return res.status(200).json({ message: 'Receta eliminada de favoritos' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'No se pudo eliminar el favorito' })
    }
    }

    module.exports = {
    getFavoritos,
    agregarFavorito,
    eliminarFavorito
    }