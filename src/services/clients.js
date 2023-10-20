const ClientRepository = require('../repositories/clients.js');
const DataValidation = require('../utils/validation.js');

const verify = new DataValidation();

const repositories = new ClientRepository();


class ClientServices {
    async GetClients() {
        const clients = repositories.GetClients();
        return clients;
    };


    async GetClientById(id, transaction) {
        verify.isIdValid(id);

        const client = repositories.GetClientById(id, transaction);
        return client;
    };


    async CreateClient(data, transaction) {
        verify.isItEmpty(data.name, data.phone);

        const result = repositories.CreateClient(data, transaction);
        return result;
    };


    async UpdateClient(id, data, transaction) {
        const result = repositories.UpdateClient(id, data, transaction);
        return result;
    };


    async DeleteClient(id, transaction) {
        verify.isIdValid(id);

        const result = repositories.DeleteClient(id, transaction);
        return result;
    };


    async FindUserByEmail(email) {
        return repositories.FindUserByEmail(email);
    };
};


module.exports = ClientServices;