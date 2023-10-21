const express = require('express');

const VeterinarianController = require('../controllers/veterinarians.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new VeterinarianController();
const router = express.Router();

router.get('/', authMiddleware(0), controller.GetVeterinarians);
router.get('/:id', authMiddleware(0), controller.GetVeterinarianById);
router.post('/', authMiddleware(0), controller.CreateVeterinarian);
router.put('/:id', authMiddleware(0), controller.UpdateVeterinarian);
router.delete('/:id', authMiddleware(0), controller.DeleteVeterinarian);

module.exports = router;