const express = require('express');
const VeterinarianController = require('../controllers/veterinarians.js');

const controller = new VeterinarianController();
const router = express.Router();

router.get('/', controller.GetVeterinarians);
router.get('/:id', controller.GetVeterinarianById);
router.post('/', controller.CreateVeterinarian);
router.put('/:id', controller.UpdateVeterinarian);
router.delete('/:id', controller.DeleteVeterinarian);

module.exports = router;