# Backend API - Sistema de Recetas

API REST desarrollada con **Express.js** y **PostgreSQL** para gestionar recetas, ingredientes, favoritos y menús semanales.

## 📋 Requisitos

- Node.js >= 14
- PostgreSQL >= 12
- npm o yarn

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env
```

Edita `.env` con tus valores:
```env
PORT=3001
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=app_database
DB_USER=app_user
DB_PASSWORD=app_password
JWT_SECRET=tu_secreto_jwt_aqui
CORS_ORIGIN=http://localhost:3000
```

### 4. Crear base de datos
```bash
# Asegúrate de que PostgreSQL esté corriendo
createdb app_database
```

### 5. Ejecutar migraciones
```bash
npm run migrate
```

## 📦 Scripts disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Producción
npm start

# Ejecutar migraciones
npm run migrate

# Seeding de datos (si está configurado)
npm run seed
```

## 🔐 Autenticación

La API utiliza **JWT (JSON Web Tokens)** para proteger las rutas. El token se debe enviar en el header:

```
Authorization: Bearer <token>
```

### Endpoints de autenticación
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión

## 📚 Endpoints principales

### Recetas
- `GET /api/recetas` - Obtener todas las recetas del usuario
- `GET /api/recetas/:id` - Obtener una receta por ID
- `POST /api/recetas` - Crear nueva receta
- `PUT /api/recetas/:id` - Actualizar receta
- `DELETE /api/recetas/:id` - Eliminar receta

### Favoritos
- `GET /api/favoritos` - Obtener recetas favoritas
- `POST /api/favoritos/:recetaId` - Agregar a favoritos
- `DELETE /api/favoritos/:recetaId` - Remover de favoritos

### Menú
- `GET /api/menu` - Obtener menú semanal
- `POST /api/menu` - Crear/actualizar menú
- `PUT /api/menu/:id` - Actualizar día del menú

### Ingredientes
- `GET /api/ingredientes` - Obtener ingredientes
- `POST /api/ingredientes` - Crear ingrediente

## 🏗️ Estructura del proyecto

```
backend/
├── config/          # Configuración (DB, variables)
├── controllers/     # Lógica de negocio
├── middleware/      # Middleware (Auth, validación)
├── models/          # Modelos Sequelize
├── routes/          # Rutas de la API
├── tests/           # Tests (opcional)
├── server.js        # Punto de entrada
├── package.json
└── .env.example     # Variables de entorno de ejemplo
```

## 🔒 Seguridad

- Contraseñas encriptadas con **bcryptjs**
- Tokens JWT con expiración
- CORS configurado
- Rate limiting
- Helmet para headers de seguridad
- Validación de entrada

## 🐳 Docker

Para ejecutar con Docker:

```bash
# Build
docker build -f Dockerfile.dev -t recetas-api .

# Run
docker run -p 3001:3001 --env-file .env recetas-api
```

O con docker-compose:
```bash
docker-compose -f docker-compose.yml up
```

## 📝 Variables de entorno

Consulta `.env.example` para todas las variables disponibles.

## 🤝 Contribuir

Para contribuir al proyecto:
1. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
2. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👤 Autor

Desarrollado para el proyecto final de [tu institución].

---

**Nota:** Asegúrate de que PostgreSQL esté corriendo antes de iniciar la aplicación.
