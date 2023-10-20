const express = require('express');

const PetController = require('../controllers/pets.js');

const controller = new PetController();
const router = express.Router();

router.get('/', controller.GetPets);
router.get('/:id', controller.GetPetById);
router.post('/', controller.CreatePet);
router.put('/:id', controller.UpdatePet);
router.delete('/:id', controller.DeletePet);

module.exports = router;