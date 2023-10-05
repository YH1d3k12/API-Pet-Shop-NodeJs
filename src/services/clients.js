const ClientRepository = require('../repositories/clients.js');

const repositories = new ClientRepository();

class ClientServices
{
    async GetClients()
    {
        const clients = repositories.GetClients(); 
        return clients;
    }

    async GetClientById(id)
    {
        const client = repositories.GetClientById(id); 
        return client;
    }

    async CreateClient(data)
    {
        const result = repositories.CreateClient(data);
        return result;
    }

    async UpdateClient(id, data)
    {
        const result = repositories.UpdateClient(id, data);
        return result;
    }

    async DeleteClient(id)
    {
        const result = repositories.DeleteClient(id);
        return result;
    }
}

module.exports = ClientServices;