const usuarios = require('../database/usuarios.database');

const validarUsuario = (req,res,next) => {
    const {usuario, password, codigo} = req.body;

    if(usuario && password){
        
        const usuarioValidado = usuarios.find(u => u.usuario === usuario && u.password === password);

        if(usuarioValidado){

            const separarCodigo = codigo.split('-');
            const convertirAString = separarCodigo.toString();

            if(parseInt(convertirAString[4]) > 1){
                return res.status(403).json({
                    mensaje: 'Usuario autenticado pero no tiene autorizacion, debe ser nivel 1'
                });
            } else {
                return res.status(200).json({
                    mensaje: 'Usuario autenticado Tiene autorizacion'
                });           
            }

        } else {
            return res.status(404).json({
                mensaje: 'Usuario inexistente'
            })           
        }
    } else {

        return res.status(404).json({
            mensaje: 'Ingrese un nombre de usuario o contraseña validos'
        })

    }

    





    next();

}


module.exports = validarUsuario;
