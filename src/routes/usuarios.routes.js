const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.mostrarTodosIdUsuario);
router.post('/', authMiddleware.validarRegistro, usuariosController.realizarRegistro);
//CORREGIR ESTO, SE MEZCLARON LOS METODOS JUNTO CON SUS FUNCIONES ADECUADAS
/*router.put('/', authMiddleware.validarRegistro, usuariosController.realizarRegistro);
router.patch('/:id', authMiddleware.validarId, usuariosController.modificarUsuario);*/


module.exports = router;