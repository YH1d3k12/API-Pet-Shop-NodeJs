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
        const user = await Users.create(
            {
                role: data.role,
                email: data.email,
                password: data.password,
                created_at: new Date()
            },
            { transaction }
        );
        console.log("REPOSITORI", user)
        return user;
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