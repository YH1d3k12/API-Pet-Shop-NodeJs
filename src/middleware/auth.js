const jwt = require('jsonwebtoken');
const config = require('../config.js');


function authMiddleware(permission) {

    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            req.session = decoded

            const { role } = decoded;

            console.log(role)

            if (role === 0) {
                return next();
            }

            if (role !== permission && permission !== null) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            next();
        });
    }
};

module.exports = authMiddleware;