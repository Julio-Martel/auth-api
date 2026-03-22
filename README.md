# auth-api
# Auth API 🔐

API REST construida con Node.js y Express para autenticación y gestión de usuarios.

## 🚀 Tecnologías

* Node.js
* Express
* JavaScript

## 📁 Estructura del proyecto

```
src/
├── controllers/
├── routes/
├── middlewares/
├── database/
└── app.js
```

## ⚙️ Instalación

```bash
git clone https://github.com/tu-usuario/auth-api.git
cd auth-api
npm install
```

## ▶️ Uso

```bash
node src/app.js
```

Servidor corriendo en:

```
http://localhost:3000
```

## 📌 Endpoints

### Obtener usuarios

```
GET /usuarios
```

### Login (ejemplo con middleware)

```
POST /login
```

Body:

```json
{
  "usuario": "admin",
  "password": "1234",
  "role": "admin"
}
```

## 🧠 Conceptos aplicados

* Middleware
* Rutas
* Controladores
* Validación de datos

## 🔒 Próximas mejoras

* Hash de contraseñas (bcrypt)
* Base de datos (MySQL)
* Autenticación con JWT

## 👨‍💻 Autor

Tu nombre

