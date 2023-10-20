const PetServices = require('../services/pets.js');

const services = new PetServices();


class PetController {
    async GetPets(req, res) {
        try {
            const pets = await services.GetPets();
            res.status(200).json({ data: pets });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async GetPetById(req, res) {
        try {
            const pet = await services.GetPetById(req.params.id);
            res.status(200).json({ data: pet });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async CreatePet(req, res) {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                id_client: req.body.id_client
            }

            const result = await services.CreatePet(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async UpdatePet(req, res) {
        try {
            const data = {
                name: req.body.name,
                description: req.body.description,
                id_client: req.body.id_client
            }

            const result = await services.UpdatePet(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async DeletePet(req, res) {
        try {
            const result = await services.DeletePet(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}


module.exports = PetController;