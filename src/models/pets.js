const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');
const Clients = require('./clients.js');

const Pets = sequelize.define('pets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idClient: {
        field: 'id_client',
        type: DataTypes.INTEGER,
        references: {
            model: Clients,
            key: 'id'
        }
    },
    name: { 
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(400),
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

module.exports = Pets;