// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



// Init variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// importar rutas
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var appRoutes = require('./routes/app');


// Conexion db
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});



// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3030, () => {
    console.log('Express server puerto: 3000: \x1b[32m%s\x1b[0m', 'online');
});