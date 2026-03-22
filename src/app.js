const express = require('express');
const app = express();

const usuariosRoutes = require('./routes/usuarios.routes');

app.use(express.json());

app.use('/api', usuariosRoutes);

app.listen(3000,() => {
    console.log('Servidor activo.');
})
