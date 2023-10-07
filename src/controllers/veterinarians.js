const VeterinarianServices = require('../services/veterinarians.js');

const services = new VeterinarianServices();

class VeterinarianController
{
    async GetVeterinarians(req, res)
    {
        try
        {
            const veterinarians = await services.GetVeterinarians();
            res.status(200).json({ data: veterinarians });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetVeterinarianById(req, res)
    {
        try
        {
            const veterinarian = await services.GetVeterinarianById(req.params.id);
            res.status(200).json({ data: veterinarian });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateVeterinarian(req, res)
    {
        try
        {
            const data = {
                name: req.body.name
            }
            
            const result = await services.CreateVeterinarian(data);

            res.status(201).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateVeterinarian(req, res)
    {
        try
        {
            const data = {
                name: req.body.name
            }
            
            const result = await services.UpdateVeterinarian(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async DeleteVeterinarian(req, res)
    {
        try
        {
            const result = await services.DeleteVeterinarian(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = VeterinarianController;