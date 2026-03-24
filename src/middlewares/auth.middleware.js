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

    if(!(usuarioValidado.codigo === codigo)){
        return res.status(404).json({
            mensaje: 'Codigo inexistente o incorrecto'
        });
    }

    const separarCodigo = codigo.split('-');
    const codString = separarCodigo.toString()

    if (parseInt(codString[6]) > 1) {
        return res.status(403).json({
            mensaje: 'No autorizado, debe ser nivel 1'
        });
    }

    next();
};

const validarRegistro = (req, res, next) => {
    const {usuario,password} = req.body;

    if(!usuario || !password){
        return res.status(403).json({
            mensaje: 'Ingrese un usuario o contraseña valida'
        })
    }
    
    const usuarioYpasswordRepetidos = usuarios.find(u => u.usuario === usuario || u.password === password )

    if(usuarioYpasswordRepetidos !== undefined){
        return res.status(403).json({
            mensaje: 'Usuario o contraseña ya existente'
        })
    }

    next();

}

module.exports = {
    validarUsuario,
    validarRegistro
};
