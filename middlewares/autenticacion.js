var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

/**
 * Verificar toke
 */
exports.verificaToken = function(req, res, next) {

    var token = req.query.token;
    
    jwt.verify(token, SEED, (err, decode) => {
    
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }
        
        req.usuario = decode.usuario;

        next();
        // res.status(200).json({
        //     ok: true,
        //     decode: decode
        // });
    });

}

/**
 * Verifica admin
 */
exports.verificaADMIN_ROLE = function(req, res, next) {

    var usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token incorrecto - No es admin',
            errors: { message: 'No es admin, no tiene permisos para continuar esta acción' }
        });
    }

}
/**
 * Verifica admin o mismo usuario
 */
exports.verificaMismoUsuario = function(req, res, next) {

    var usuario = req.usuario;
    var id = req.params.id;

    if (usuario.role === 'ADMIN_ROLE' || usuario._id === id) {
        next();
        return;
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token incorrecto - No es admin ni es el mismo usuario',
            errors: { message: 'No es admin, no tiene permisos para continuar esta acción' }
        });
    }

}
