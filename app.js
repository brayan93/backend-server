// Requires
var express = require('express');



// Init variables
var app = express();



// Rutas
app.get('/', ( req, res, next ) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

} );


// Escuchar peticiones
app.listen(3030, () => {
    console.log('Express server puerto: 3000: \x1b[32m%s\x1b[0m', 'online');
});