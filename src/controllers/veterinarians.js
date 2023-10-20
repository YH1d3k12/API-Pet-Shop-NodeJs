const VeterinarianServices = require('../services/veterinarians.js');
const UserServices = require('../services/users.js');


const userServices = new UserServices();
const veterinarianServices = new VeterinarianServices();


class VeterinarianController {
    async GetVeterinarians(req, res) {
        try {
            const veterinarians = await veterinarianServices.GetVeterinarians();
            res.status(200).json({ data: veterinarians });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async GetVeterinarianById(req, res) {
        try {
            const veterinarian = await veterinarianServices.GetVeterinarianById(req.params.id);
            res.status(200).json({ data: veterinarian });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async CreateVeterinarian(req, res) {
        try {
            const userData = {
                email: req.body.email,
                password: req.body.password,
                role: 1
            }

            const user = await userServices.CreateUser(userData);
            
            const veterinarianData = {
                id_user: user.id,
                name: req.body.name
            }

            const result = await veterinarianServices.CreateVeterinarian(veterinarianData);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async UpdateVeterinarian(req, res) {
        try {
            const data = {
                name: req.body.name
            }

            const result = await veterinarianServices.UpdateVeterinarian(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async DeleteVeterinarian(req, res) {
        try {
            const result = await veterinarianServices.DeleteVeterinarian(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}


module.exports = VeterinarianController;