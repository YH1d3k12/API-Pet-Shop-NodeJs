const express = require('express');

const UserController = require('../controllers/users.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new UserController();
const router = express.Router();

router.post('/login', controller.Login);
router.get('/', authMiddleware(0), controller.GetUsers);
router.get('/:id', authMiddleware(0), controller.GetUserById);
router.post('/', authMiddleware(0), controller.CreateUser);
router.put('/:id', authMiddleware(0), controller.UpdateUser);
router.delete('/:id', authMiddleware(0), controller.DeleteUser);

module.exports = router;