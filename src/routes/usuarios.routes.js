const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.mostrarTodosIdUsuario);
router.post('/', authMiddleware.validarUsuario, usuariosController.mostrarInformacionPersonalEmpleados);
router.put('/', authMiddleware.validarRegistro)


module.exports = router;