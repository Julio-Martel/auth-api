const usuarios = require('../database/usuarios.database');

const mostrarTodosIdUsuario = (req,res) => {
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

module.exports = {
    mostrarTodosIdUsuario
};