const usuarios = require('../database/usuarios.database');
const generarId = require('../utils/usuarios.utils');

const mostrarTodosIdUsuario = (req,res) => {
    const id = parseInt(req.query.id);
    const edadInicial = parseInt(req.query.edadInicial)
    const  edadFinal = parseInt(req.query.edadFinal);

    if(edadFinal && edadInicial){
        const edadesFiltradas = usuarios.filter(u => u.infoPersonal.edad >= edadInicial && u.infoPersonal.edad < edadFinal);

        return res.status(200).json({
            mensaje: "Empleados menores de 30 años",
            edadesFiltradas
        })

    }

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

const modificarUsuario = (req,res) => {
    const id = parseInt(req.params.id);
    const usuarioPosicion = usuarios.findIndex(u => u.id === id);

    usuarios[usuarioPosicion] = {
        id: id,
        ...usuarios[usuarioPosicion],
        ...req.body
    }

    return res.status(200).json({
        mensaje: 'Usuario actualizado',
        usuario: usuarios[usuarioPosicion],
        usuarios
    })

}

const reemplarUsuario = (req,res) => {

    const id = req.params.id;
    const usuarioEncontrado = usuarios.findIndex(u => u.id === id);

    const usuarioActualizado = {
        id: id,
        codigo: null,
        usuario: req.body.usuario,
        password: req.body.password,
        role: req.body.role,
        infoPersonal: req.body.infoPersonal     
    };

    usuarioActualizado.codigo = `USR-00${id}`;

    usuarios[usuarioEncontrado] = {
        ...usuarioActualizado
    }

    res.status(200).json({
        mensaje: 'USUARIO ACTUALIZADO',
        usuarios
    })

}

module.exports = {
    mostrarTodosIdUsuario,
    mostrarInformacionPersonalEmpleados,
    realizarRegistro,
    modificarUsuario,
    reemplarUsuario
};