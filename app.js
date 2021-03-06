// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



// Init variables
var app = express();

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-methods", "POST, GET, PUT, DELETE, OPTION");
    next();
});

app.get('/', function (req, res, next) {
    // Handle the get for this route
});

app.post('/', function (req, res, next) {
    // Handle the post for this route
});

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


// Conexion db
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', {useNewUrlParser: true}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

// Server index config
// var serverIndex = require('serve-index');
// app.use(express.static(__dirname + '/'));
// app.use('/uploads', serverIndex(__dirname + '/uploads'));


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3030, () => {
    console.log('Express server puerto: 3000: \x1b[32m%s\x1b[0m', 'online');
});