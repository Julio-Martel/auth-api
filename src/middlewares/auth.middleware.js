const usuarios = require('../database/usuarios.database');

const validarUsuario = (req, res, next) => {
    const { usuario, password, codigo } = req.body;

    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: 'Ingrese usuario y contraseña válidos'
        });
    }

    const usuarioValidado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (!usuarioValidado) {
        return res.status(404).json({
            mensaje: 'Usuario inexistente'
        });
    }

    const separarCodigo = codigo.split('-');

    if (parseInt(separarCodigo[5]) > 1) {
        return res.status(403).json({
            mensaje: 'No autorizado, debe ser nivel 1'
        });
    }

    // 🔥 SI LLEGA ACÁ → TODO OK
    next();
};


module.exports = validarUsuario;
