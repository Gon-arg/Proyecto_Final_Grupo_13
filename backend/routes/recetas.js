const { Router } = require('express')
const {
    getRecetas,
    getRecetaById,
    crearReceta,
    actualizarReceta,
    eliminarReceta
    } = require('../controllers/recetaController')
const { verificarToken } = require('../middleware/auth')

const router = Router()

router.get('/', verificarToken, getRecetas)
router.get('/:id', verificarToken, getRecetaById)
router.post('/', verificarToken, crearReceta)
router.put('/:id', verificarToken, actualizarReceta)
router.delete('/:id', verificarToken, eliminarReceta)

module.exports = router