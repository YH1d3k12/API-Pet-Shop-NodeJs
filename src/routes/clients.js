const express = require('express');

const ClientController = require('../controllers/clients.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new ClientController();
const router = express.Router();

router.get('/', authMiddleware(1), controller.GetClients);
router.get('/:id', authMiddleware(1), controller.GetClientById);
router.post('/', authMiddleware(1), controller.CreateClient);
router.put('/:id', authMiddleware(1), controller.UpdateClient);
router.delete('/:id', authMiddleware(1), controller.DeleteClient);

module.exports = router;