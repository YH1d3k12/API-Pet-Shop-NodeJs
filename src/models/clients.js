const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Clients = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { 
        type: DataTypes.STRING(150),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {});

module.exports = Clients;