const Users = require('../models/users.js');


class UserRepository {
    async GetUsers() {
        const users = Users.findAll();
        return users;
    };


    async GetUserById(id, transaction) {
        const user = Users.findOne(
            {
                where: { id }
            },
            { transaction }
        );

        return user;
    };


    async CreateUser(data, transaction) {
        Users.create(
            {
                email: data.email,
                password: data.password,
                role: 3,
                created_at: new Date()
            },
            { transaction }
        );
    };


    async UpdateUser(id, data, transaction) {
        Users.update(
            {
                email: data.email,
                password: data.password,
                updated_at: new Date().toLocaleString()
            },
            { where: { id } },
            { transaction }
        );
    };


    async DeleteUser(id, transaction) {
        Users.destroy(
            { where: { id } },
            { transaction }
        );
    };


    async FindUserByEmail(email) {
        return Users.findOne({
            where: {
                email: email
            }
        });
    };
};


module.exports = UserRepository;