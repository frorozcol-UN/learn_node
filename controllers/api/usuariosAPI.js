var Usuario = require('../../models/usuario') 

exports.usuario_list = function(req, res){
    Usuario.find({}, function(err, usuarios){
        res.status(200).json({
            usuarios: usuarios,
        })
    })
}

exports.usuario_create = function(req, res){
    var usuario = new Usuario({nombre: req.body.nombre})

    usuario.save((err)=>{
        res.status(200).json({usuario:usuario})
    })
}

exports.usuario_reservar = (req, res)=>{
    console.log(res.body)
    Usuario.findById(req.body.id, (err, usuario)=>{
        usuario.reservar(req.body.bici_id, req.body.desde, req.body.hasta, (err)=>{
            console.log('Reservar!!!', err);
            res.status(200).send();
        })
    })
}