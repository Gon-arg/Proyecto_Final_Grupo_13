const { Router } = require('express')
const {
    agregarIngrediente,
    eliminarIngrediente
} = require('../controllers/ingredienteController')
const { verificarToken } = require('../middleware/auth')

const router = Router({ mergeParams: true })

router.post('/', verificarToken, agregarIngrediente)
router.delete('/:id', verificarToken, eliminarIngrediente)

module.exports = router