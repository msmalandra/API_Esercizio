const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UtentiSchema = new Schema({
    id:{type: String, unique: true, required: true},
    nome: {type: String, required: true},
    cognome: {type: String, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    status: {type: Boolean, required: true},
})

const Utenti = mongoose.model('Utenti', UtentiSchema);
module.exports = Utenti;