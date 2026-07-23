const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'secret_por_defecto'

// TODO 3 — Generar token
function generarToken (user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
}

function verificarToken (req, res, next) {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado' })
  }

  // TODO 4 — Extraer el token del header
  const token = authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Formato de token inválido' })
  }

  try {
    // TODO 5 — Verificar el token
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' })
  }
}

module.exports = { generarToken, verificarToken }