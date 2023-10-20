const express = require('express');

const ClientController = require('../controllers/clients.js');

const controller = new ClientController();
const router = express.Router();

router.get('/', controller.GetClients);
router.get('/:id', controller.GetClientById);
router.post('/', controller.CreateClient);
router.put('/:id', controller.UpdateClient);
router.delete('/:id', controller.DeleteClient);

module.exports = router;