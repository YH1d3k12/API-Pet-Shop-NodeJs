const { DataTypes } = require('sequelize');
const db = require('../database/database.js');
const Clients = require('./clients.js');

const Pets = db.define('pets', {
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
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
    }
}, {});

module.exports = Pets;