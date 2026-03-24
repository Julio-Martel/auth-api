const usuarios = require('../database/usuarios.database');
const generarId = require('../utils/usuarios.utils');

const mostrarTodosIdUsuario = (req,res) => {
    const id = parseInt(req.query.id);

    if(id){
        const usuarioObtenido = usuarios.find(u => u.id === id);

        if(usuarioObtenido){
            return res.status(200).json({
                mensaje: 'Usuario filtrado',
                usuario: {
                    id: usuarioObtenido.id,
                    nombre: usuarioObtenido.usuario
                }
            })
        } else {
            return res.status(403).json({
                mensaje: 'Id inexistente'
            })
        }
    }

    const datosPrincipales = [];

    for (const us of usuarios) {
        const user = {
            id: us.id,
            usuario: us.usuario
        }
    
        datosPrincipales.push(user);
    }

    return res.json({
        mensaje: 'Listado de todos los usuarios de la compañia',
        datosPrincipales
    });

}

const mostrarInformacionPersonalEmpleados = (req,res) => {
    const resultadosEmpleados = [];

    for (const user of usuarios) {
        if(user.id > 1){
            resultadosEmpleados.push(user);
        }
    }
    
    return res.status(200).json({
        mensaje: 'Listado de datos de todos los empleados',
        resultadosEmpleados
    })
}

const realizarRegistro = (req,res) => {

    const nuevoUsuario = {
        id: generarId(),
        codigo: null,
        usuario: req.body.usuario,
        password: req.body.password,
        role: req.body.role,
        infoPersonal: req.body.infoPersonal
    }

    nuevoUsuario.codigo = `USR-00${nuevoUsuario.id}`

    usuarios.push(nuevoUsuario);

    return res.status(200).json({
        mensaje: 'Usuario creado con exito',
        usuarios
    })

}

module.exports = {
    mostrarTodosIdUsuario,
    mostrarInformacionPersonalEmpleados,
    realizarRegistro
};