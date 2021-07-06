const User = require('../models/users.mongo.model.js');

class UsersController {
  async getUsers(req, res) {
    const users = await User.find();
    res.json(users)
  }
  async getUser(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user)
  }
  async addUser(req, res) {
    const { nombre, apellido, tipo } = req.body;
    const user = {
      nombre,
      apellido,
      tipo
    };
    const newUser = User(user);
    await newUser.save();
    res.json({ msg: 'Usuario Agregado en MongoDB' });
  }
  async updateUser(req, res) {
    const { id } = req.params;
    const { nombre, apellido, tipo } = req.body;
    const user = {
      nombre,
      apellido,
      tipo
    };
    await User.findByIdAndUpdate(id, user);
    res.json({ msg: 'Usuario Actualizado en MongoDB' });
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ msg: 'Usuario Eliminado en MongoDB' })
  }
}

module.exports = new UsersController;