const Clients = require('../models/clients.js');

class ClientRepository
{
    async GetClients()
    {
        const clients = Clients.findAll();
        return clients;
    };

    async GetClientById(id)
    {
        const client = Clients.findByPk(id);
        return client;
    };

    async CreateClient(data)
    {
        Clients.create({
            name: data.name,
            phone: data.phone,
            createdAt: new Date(),
        });          
    };

    async UpdateClient(id, data)
    {
        Clients.update(
            {
                name: data.name,
                phone: data.phone,
                updatedAt: new Date().toLocaleString()
            }, 
            {
                where: {id: id}
            }
        );
    };
    
    async DeleteClient(id)
    {
        Clients.destroy(
            {
                where: {id: id}
            }
        );          
    };
};

module.exports = ClientRepository;