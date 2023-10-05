const ClientRepository = require('../repositories/clients.js');

const repositories = new ClientRepository();

class ClientServices
{
    async GetClients()
    {
        const clients = repositories.GetClients(); 
        return clients;
    }

    async GetClientById(id, transaction)
    {
        const client = repositories.GetClientById(id, transaction); 
        return client;
    }

    async CreateClient(data, transaction)
    {
        const result = repositories.CreateClient(data, transaction);
        return result;
    }

    async UpdateClient(id, data, transaction)
    {
        const result = repositories.UpdateClient(id, data, transaction);
        return result;
    }

    async DeleteClient(id, transaction)
    {
        const result = repositories.DeleteClient(id, transaction);
        return result;
    }
}

module.exports = ClientServices;