let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  function ensureAuthenticated(req, res, next){
      if(req.isAuthenticated()){
          return next();
      } else {
          req.flash('error_msg','You are not logged in');
          res.redirect('/clienteForm/login');
      }
  }

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

router.get('/conten', function (req, res) {
    res.render('conten');
});
router.get('/login', function (req, res) {
    res.render('login');
});


router.get('/cliente/modificar/:id', (req, res, next) => {
    let idcliente = req.params.id;
    cliente.findOne({ _id: idcliente }, (err, cliente) => {
        //console.log(persona);
        if (err) throw err;
        res.render('clienteForm', { cliente: cliente });
    });
});

router.get('/cliente/eliminar/:id', (req, res, next) => {
    let idcliente = req.params.id;

    cliente.remove({ _id: idcliente }, (err) => {
        if (err) throw err;
        //o llamar nuevamente a find() y res.render();
        res.redirect('/');
    });
});

module.exports = router;