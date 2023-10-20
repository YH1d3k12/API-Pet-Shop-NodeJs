const Users = require('../models/users.js');
const DataEncrypter = require('../utils/encrypter.js');

const encrypter = new DataEncrypter();


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
        const hashedPassword = await encrypter.HashPassword(data.password);

        console.log("After hash", hashedPassword)

        const user = await Users.create(
            {
                role: data.role,
                email: data.email,
                password: hashedPassword,
                created_at: new Date()
            },
            { transaction }
        );
        return user;
    };


    async UpdateUser(id, data, transaction) {
        const hashedPassword = await encrypter.HashPassword(data.password);

        Users.update(
            {
                email: data.email,
                password: hashedPassword,
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