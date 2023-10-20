const Clients = require('../models/clients.js');
const Users = require('../models/users.js');
const Pets = require('../models/pets.js');

class ClientRepository {
    async GetClients() {
        const clients = Clients.findAll();
        return clients;
    };


    async GetClientById(id, transaction) {
        const client = Clients.findOne(
            {
                where: { id },
                include: [
                    {
                        model: Users
                    },
                    {
                        model: Pets
                    },
                ],
            },
            { transaction }
        );

        return client;
    };


    async CreateClient(data, transaction) {
        Clients.create(
            {
                id_user: data.id_user,
                name: data.name,
                phone: data.phone,
                created_at: new Date()
            },
            { transaction }
        );
    };


    async UpdateClient(id, data, transaction) {
        Clients.update(
            {
                name: data.name,
                phone: data.phone,
                updated_at: new Date().toLocaleString()
            },
            { where: { id } },
            { transaction }
        );
    };


    async DeleteClient(id, transaction) {
        Clients.destroy(
            { where: { id } },
            { transaction }
        );
    };
};


module.exports = ClientRepository;