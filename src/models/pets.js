const { DataTypes } = require('sequelize');

const db = require('../database/database.js');

const Clients = require('./clients.js');


const Pets = db.define('pets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_client: {
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
    created_at: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        field: 'updated_at',
        type: DataTypes.DATE
    },
}, {});


module.exports = Pets;