const UserRepository = require('../repositories/users.js');
const DataValidation = require('../utils/validation.js');

const verify = new DataValidation();

const repositories = new UserRepository();


class ClientServices {
    async GetUsers() {
        const users = repositories.GetUsers();
        return users;
    };


    async GetUserById(id, transaction) {
        verify.isIdValid(id);

        const user = repositories.GetUserById(id, transaction);
        return user;
    };


    async CreateUser(data, transaction) {
        verify.isItEmpty(data.email, data.password);

        const result = repositories.CreateUser(data, transaction);
        return result;
    };


    async UpdateUser(id, data, transaction) {
        const result = repositories.UpdateUser(id, data, transaction);
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