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

const validarId = (req, res, next) => {
    const id = parseInt(req.params.id);
    const validaId = usuarios.find(u => u.id === id);

    if(validaId === undefined){
        return res.status(403).json({
            mensaje: "ID no encontrado"
        })
    } else {
        console.log('Envie datos con el thunder client')
    }

    next();
}

const validarBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            mensaje: 'Debe enviar datos en el body'
        });
    }

    next();
};

module.exports = {
    validarUsuario,
    validarRegistro,
    validarId,
    validarBody
};
