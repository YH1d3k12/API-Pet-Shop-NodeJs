const Clients = require('../models/clients.js');

class ClientRepository
{
    async GetClients()
    {
        const clients = Clients.findAll();
        return clients;
    };

    async GetClientById(id, transaction)
    {
        const client = Clients.findOne(
            {
                where: {id},
                include: ['pets'],
            },
            {transaction}
        );

        return client;
    };

    async CreateClient(data, transaction)
    {
        Clients.create(
            {
                name: data.name,
                phone: data.phone,
                created_at: new Date()
            }, 
            {transaction}
        );          
    };

    async UpdateClient(id, data, transaction)
    {
        Clients.update(
            {
                name: data.name,
                phone: data.phone,
                updated_at: new Date().toLocaleString()
            }, 
            {where: {id}},
            {transaction}
        );
    };
    
    async DeleteClient(id, transaction)
    {
        Clients.destroy(
            {where: {id}},
            {transaction}
        );          
    };
};

module.exports = ClientRepository;