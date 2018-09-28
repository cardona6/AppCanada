let mongoose = require('mongoose');

mongoose, Promise = global.Promise;
mongoose.connect('mongodb://localhost/cliente', {
    }).then(() => console.log('db is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;