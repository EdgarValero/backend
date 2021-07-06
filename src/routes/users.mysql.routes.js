const { Router } = require('express');
const router = Router();

const UsersController = require('../controllers/users.mysql.controller.js');

router.get('/', UsersController.getUsers);

router.get('/:id', UsersController.getUser);

router.post('/', UsersController.addUser)

router.put('/:id', UsersController.updateUser)

router.delete('/:id', UsersController.deleteUser)

module.exports = router;