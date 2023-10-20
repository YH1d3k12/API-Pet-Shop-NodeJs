const jwt = require('jsonwebtoken');

const config = require('../config.js');


function authMiddleware(req, res, next, permission) {
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

        if (role !== permission || role !== 0) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        next();
    });
};

module.exports = authMiddleware;