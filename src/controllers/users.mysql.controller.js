const UsersModel = require('../models/users.mysql.model.js');

class UserController {
  async getUsers(req, res) {
    const users = await UsersModel.getUsers();
    res.json(users);
  }
  async getUser(req, res) {
    const { id } = req.params;
    const user = await UsersModel.getUser(id);
    res.json(user[0]);
  }
  async addUser(req, res) {
    const { nombre, apellido, tipo } = req.body;
    const user = {
      nombre,
      apellido,
      tipo
    };
    await UsersModel.addUser(user);
    res.json({ msg: 'Usuario Agregado!!!' })
  }
  async updateUser(req, res) {
    const { id } = req.params;
    const { nombre, apellido, tipo } = req.body;
    const user = {
      nombre,
      apellido,
      tipo
    };
    await UsersModel.updateUser(user, id);
    res.json({ msg: 'Usuario Actualizado!!!' })
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    await UsersModel.deleteUser(id);
    res.json({ msg: 'Usuario Eliminado!!!' })
  }
}

module.exports = new UserController;