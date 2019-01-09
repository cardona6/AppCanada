let express = require('express');
let router = express.Router();

let Cliente = require('./../models/cliente');

/* GET home page. */
router.get('/', (req, res, next) => {
    Cliente.find((err, clientes) => {
        //console.log(clientes);
        if (err) throw err;
        res.render('index', { clientes: clientes });
    });
});
  

router.get('/cliente/nuevo', (req, res, next) => {
    res.render('clienteForm', {});
});

router.get('/listaClientes', function (req, res) {
    res.render('listaClientes');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/register', function (req, res) {
    res.render('register');
});



router.get('/cliente/modificar/:id', (req, res, next) => {
    let idcliente = req.params.id;
    Cliente.findOne({ _id: idCliente }, (err, cliente) => {
        //console.log(cliente);
        if (err) throw err;
        res.render('clienteForm', { cliente: cliente });
    });
});

router.get('/cliente/eliminar/:id', (req, res, next) => {
    let idcliente = req.params.id;

    Cliente.remove({ _id: idCliente }, (err) => {
        if (err) throw err;
        //o llamar nuevamente a find() y res.render();
        res.redirect('/');
    });
});

module.exports = router;