let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/cliente');

router.post('/cliente/operar', (req, res, next) => {
    console.log(req.body);

    if (req.body._id === "") {
        let per = new Cliente({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            edad: req.body.edad,
            pais: req.body.pais
        });

        per.save();
    } else {
        //console.log(req.body._id);
        Cliente.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        });
    }
    res.redirect('/');
});

module.exports = router;