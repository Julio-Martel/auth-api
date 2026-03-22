const usuarios = require('../database/usuarios.database');

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

module.exports = {
    mostrarTodosIdUsuario,
    mostrarInformacionPersonalEmpleados
};