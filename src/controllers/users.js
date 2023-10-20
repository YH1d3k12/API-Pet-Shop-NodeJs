const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserServices = require('../services/users.js');
const config = require('../config.js');

const services = new UserServices();


class UserController {
    async GetUsers(req, res) {
        try {
            const users = await services.GetUsers();
            res.status(200).json({ data: users });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async GetUserById(req, res) {
        try {
            const user = await services.GetUserById(req.params.id);
            res.status(200).json({ data: user });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async CreateUser(req, res) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.CreateUser(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async UpdateUser(req, res) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password
            }

            const result = await services.UpdateUser(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async DeleteUser(req, res) {
        try {
            const result = await services.DeleteUser(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };


    async Login(req, res) {
        try {
            const { email, password } = req.body;

            const { dataValues: user } = await services.FindUserByEmail(email);

            if (!email || !password) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                config.secret,
            )
            return res.status(200).json({ accessToken: token });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };
};


module.exports = UserController;