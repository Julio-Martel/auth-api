const usuarios = require('../database/usuarios.database');

const generarId = () => {
    const nuevoId = (usuarios.length) + 1;
    return nuevoId;
}

module.exports = generarId;