const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  nombre: String,
  apellido: String,
  tipo: String
});

module.exports = model('users', userSchema);