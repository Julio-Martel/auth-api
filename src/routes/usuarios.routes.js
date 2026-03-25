const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.mostrarTodosIdUsuario);
router.post('/', authMiddleware.validarRegistro, usuariosController.realizarRegistro);
router.put('/:id', authMiddleware.validarId, authMiddleware.validarBody, usuariosController.reemplarUsuario);
router.patch('/:id', authMiddleware.validarId, authMiddleware.validarBody, usuariosController.modificarUsuario);

module.exports = router;