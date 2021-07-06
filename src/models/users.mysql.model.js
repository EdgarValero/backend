const connection = require('../dbMySQL.js');

class UsersModel {
  getUsers() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios', (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
  getUser(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios WHERE id = ?', id, (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
  addUser(user) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO usuarios SET ?', user, (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
  updateUser(user, id) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE usuarios SET nombre = ?, apellido = ?, tipo = ? WHERE id = ?', [
        user.nombre,
        user.apellido,
        user.tipo,
        id
      ], (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
  deleteUser(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM usuarios WHERE id = ?', id, (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
}

module.exports = new UsersModel;