const express = require('express');

const PetController = require('../controllers/pets.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new PetController();
const router = express.Router();

router.get('/', authMiddleware(null), controller.GetPets);
router.get('/:id', authMiddleware(null), controller.GetPetById);
router.post('/', authMiddleware(null), controller.CreatePet);
router.put('/:id', authMiddleware(null), controller.UpdatePet);
router.delete('/:id', authMiddleware(null), controller.DeletePet);

module.exports = router;