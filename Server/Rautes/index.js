const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/apiworkshop';


router.get('/', function (req, res, next) {
    mongoose.connect(mongoConnection);
    Product.find({})
        .then((products) => {
            res.render('index', {
                title: 'cyf',
                description: 'we sell the finest good ',
                products
            });
        }).catch((err) => {
            res.sendStatus(500);
        });

});

router.get('/say-hello/:name/:lastName', function (req, res, next) {
    const sayhello = '${req.query.greeting} ${req.query.title}  $ {req.params.name}  $ { req.params.lastName} ';

    // const sayhello = 'hello ${req,params,name};
    res.send(sayhello);
});

router.get('/', (req, res) => {
    res.send("hola mundo");
});

router.post('/', (req, res) => {
    const Product = req.body;
    res.send(' I received ' + Product.title);
});

router.delete('/', (req, res) => {
    res.send("I have delete");
});
/* GET single-product information page. */
router.get('/products/:id', function (req, res, next) {
    const id = req.params.Id;
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('single-product', {
                title: products[0].title,
                description: `We sell the finest goods and services. 
         This is the ${products[0].title}.`,
                product: products[0]
            });
        }
    }
});

module.exports = router;