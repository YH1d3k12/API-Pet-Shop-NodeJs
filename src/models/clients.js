const { DataTypes } = require('sequelize');
const db = require('../database/database.js');
const Pets = require('./pets.js');

const Clients = db.define('clients', {
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
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
    },
}, {});

Pets.belongsTo(Clients, {foreignKey: 'id_client', allowNull: false });
Clients.hasMany(Pets, {foreignKey: 'id_client'});

module.exports = Clients;