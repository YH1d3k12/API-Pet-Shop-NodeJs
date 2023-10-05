const ClientServices = require('../services/clients.js');

const services = new ClientServices();

class ClientController
{
    async GetClients(req, res)
    {
        try
        {
            const clients = await services.GetClients();
            res.status(200).json({ data: clients });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetClientById(req, res)
    {
        try
        {
            const client = await services.GetClientById(req.params.id);
            res.status(200).json({ data: client });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateClient(req, res)
    {
        try
        {
            const data = {
                name: req.body.name,
                phone: req.body.phone
            }
            
            const result = await services.CreateClient(data);

            res.status(201).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateClient(req, res)
    {
        try
        {
            const data = {
                name: req.body.name,
                phone: req.body.phone
            }
            
            const result = await services.UpdateClient(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async DeleteClient(req, res)
    {
        try
        {
            const result = await services.DeleteClient(req.params.id);
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

module.exports = ClientController;