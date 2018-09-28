let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let clienteSchema = new Schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    edad: { type: Number, min: 0 },
    pais: { type: String }
}, { versionKey: false });

let Cliente = mongoose.model('Clientes', clienteSchema);

module.exports = Cliente;