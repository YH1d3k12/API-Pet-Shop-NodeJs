const { Sequelize } = require('sequelize');
const { development } = require('../config.js');

const sequelize = new Sequelize(development);

sequelize.sync()
    .then(() => {
        console.log('Connection successfull');
    })
    .catch((err) => {
        console.error(err.message);
    });

module.exports = sequelize;