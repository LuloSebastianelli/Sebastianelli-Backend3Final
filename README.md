# 🐾 Adoptme API - Sistema de Adopción de Mascotas

API REST completa para un sistema de adopción de mascotas desarrollada con Node.js, Express y MongoDB. Incluye autenticación JWT, manejo de archivos, documentación con Swagger y despliegue con Docker/Kubernetes.

## Imagen Dockerhub

https://hub.docker.com/r/luloh/sebastianelli-backend3final

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Docker](#docker)
- [Kubernetes](#kubernetes)
- [Documentación](#documentación)
- [Contribución](#contribución)

## ✨ Características

- 🔐 **Autenticación JWT** con Passport.js
- 👥 **Gestión de usuarios** (registro, login, perfil)
- 🐕 **Gestión de mascotas** (CRUD completo)
- 📋 **Sistema de adopciones**
- 📁 **Subida de archivos** (imágenes de mascotas, documentos)
- 🎭 **Generación de datos mock** para testing
- 📚 **Documentación automática** con Swagger
- 🧪 **Testing completo** con Mocha y Chai
- 🐳 **Containerización** con Docker
- ☸️ **Orquestación** con Kubernetes
- 📊 **Logging** personalizado con Winston

## 🛠 Tecnologías

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Autenticación y Seguridad
- **Passport.js** - Middleware de autenticación
- **JWT** - JSON Web Tokens
- **bcrypt** - Hashing de contraseñas

### Documentación y Testing
- **Swagger** - Documentación de API
- **Mocha** - Framework de testing
- **Chai** - Librería de aserciones
- **Supertest** - Testing de APIs HTTP

### Utilidades
- **Multer** - Manejo de archivos
- **Winston** - Sistema de logging
- **Faker.js** - Generación de datos mock
- **Moment.js** - Manejo de fechas

### DevOps
- **Docker** - Containerización
- **Kubernetes** - Orquestación de contenedores

## 📁 Estructura del Proyecto

```
src/
├── config/           # Configuraciones
│   ├── config.js     # Configuración general
│   ├── logger.js     # Configuración de Winston
│   ├── multer.js     # Configuración de Multer
│   ├── passport.config.js # Configuración de Passport
│   └── swagger.js    # Configuración de Swagger
├── controllers/      # Controladores
│   ├── adoption.controller.js
│   ├── mock.controller.js
│   ├── pet.controller.js
│   ├── session.controller.js
│   └── user.controller.js
├── dao/             # Data Access Objects
│   ├── dto/         # Data Transfer Objects
│   └── mongo/       # Implementación MongoDB
├── docs/            # Documentación Swagger
├── repository/      # Capa de repositorio
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── utils/           # Utilidades
├── app.js           # Configuración de Express
└── server.js        # Punto de entrada
```

## 🚀 Instalación

### Prerrequisitos
- Node.js (v22.9.0 o superior)
- MongoDB
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd sebastianelli-backend3final
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear archivos `.env.dev` y `.env.prod`:

```env
# .env.dev
PORT=
MONGO_URL=
SIGN_COOKIE=your-cookie-secret
JWT_PRIVATE_KEY=your-jwt-secret
JWT_EXPIRES_IN=
FRONTEND_DEV_URL=
```

4. **Iniciar MongoDB**
```bash
mongod
```

5. **Ejecutar la aplicación**
```bash
# Desarrollo
npm run start

# Con nodemon (si está configurado)
npm run dev
```

## ⚙️ Configuración

### Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto del servidor | `8080` |
| `MONGO_URL` | URL de MongoDB | `mongodb://localhost:27017/adoptme` |
| `SIGN_COOKIE` | Secreto para cookies | `your-secret` |
| `JWT_PRIVATE_KEY` | Clave privada JWT | `your-jwt-secret` |
| `JWT_EXPIRES_IN` | Expiración del token | `86400` |
| `FRONTEND_DEV_URL` | URL del frontend | `http://localhost:3000` |

## 📖 Uso

### Iniciar el servidor
```bash
npm run start
```

El servidor estará disponible en `http://localhost:8080`

### Documentación interactiva
Accede a la documentación Swagger en: `http://localhost:8080/api-docs`

## 🛣 Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión

### Usuarios
- `GET /api/user/all` - Obtener todos los usuarios
- `GET /api/user/current` - Obtener usuario actual
- `GET /api/user/:uid` - Obtener usuario por ID
- `PUT /api/user/updateOneUser/:uid` - Actualizar usuario
- `DELETE /api/user/deleteOneUser/:uid` - Eliminar usuario
- `POST /api/user/uploadDocument/:uid` - Subir documento

### Mascotas
- `GET /api/pet/all` - Obtener todas las mascotas
- `GET /api/pet/:pid` - Obtener mascota por ID
- `POST /api/pet` - Crear mascota
- `POST /api/pet/withImage` - Crear mascota con imagen
- `POST /api/pet/:pid/imagePet` - Agregar imagen a mascota
- `PUT /api/pet/updateOnePet/:pid` - Actualizar mascota
- `DELETE /api/pet/deleteOnePet/:pid` - Eliminar mascota

### Adopciones
- `POST /api/adoption/createAdoption/:uid/:pid` - Crear adopción
- `GET /api/adoption/getAllAdoptions/all` - Obtener todas las adopciones
- `GET /api/adoption/getOneAdoption/:aid` - Obtener adopción por ID
- `PUT /api/adoption/updateOneAdoption/:aid/:uid/:pid` - Actualizar adopción
- `DELETE /api/adoption/deleteOneAdoption/:aid` - Eliminar adopción

### Mocking
- `GET /api/mock/mockingUsers` - Generar usuarios mock
- `GET /api/mock/mockingPets` - Generar mascotas mock
- `POST /api/mock/generateData` - Generar datos en BD

## 🧪 Testing

### Ejecutar tests
```bash
# Todos los tests
npm test

# Tests específicos
npm test -- --grep "users"
npm test -- --grep "pets"
npm test -- --grep "adoption"
```

### Estructura de tests
- `test/user.session.test.js` - Tests de usuarios y sesiones
- `test/pet.test.js` - Tests de mascotas
- `test/adoption.test.js` - Tests de adopciones

Los tests incluyen:
- ✅ Registro y login de usuarios
- ✅ CRUD de mascotas
- ✅ Proceso de adopción completo
- ✅ Subida de archivos
- ✅ Autenticación y autorización

## 🐳 Docker

### Construir imagen
```bash
docker build -t luloh/sebastianelli-backend3final:1.0.0-lts .
```

### Ejecutar contenedor
```bash
docker run -p 8080:8080 luloh/sebastianelli-backend3final:1.0.0-lts
```

### Docker Hub
```bash
# Push a Docker Hub
docker push luloh/sebastianelli-backend3final:1.0.0-lts

# Pull desde Docker Hub
docker pull luloh/sebastianelli-backend3final:1.0.0-lts
```

## ☸️ Kubernetes

### Desplegar en Kubernetes
```bash
kubectl apply -f kube-mock.yaml
```

### Comandos útiles
```bash
# Ver servicios
kubectl get svc

# Ver pods
kubectl get pods

# Ver logs
kubectl logs -f deployment/sebastianelli-backend3final-deploy

# Obtener URL del servicio (Minikube)
minikube service sebastianelli-backend3final --url

# Eliminar deployment
kubectl delete -f kube-mock.yaml
```

## 📚 Documentación

### Swagger UI
La documentación interactiva está disponible en:
`http://localhost:8080/api-docs`

### Características de la documentación:
- 📋 Todos los endpoints documentados
- 🔐 Autenticación Bearer Token
- 📝 Ejemplos de request/response
- 🧪 Interfaz para probar endpoints

### Autenticación en Swagger
1. Hacer login en `/api/auth/login`
2. Copiar el token de la respuesta
3. Hacer clic en "Authorize" en Swagger UI
4. Ingresar: `Bearer <tu-token>`

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Estándares de código
- Usar ESLint para linting
- Seguir convenciones de naming
- Escribir tests para nuevas funcionalidades
- Documentar endpoints en Swagger

## 👨‍💻 Autor

**Lucciano Sebastianelli**

## 🙏 Agradecimientos

- CoderHouse por la formación
- Comunidad de Node.js
- Contribuidores del proyecto

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!
