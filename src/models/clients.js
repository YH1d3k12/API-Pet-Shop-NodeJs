const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');
const Pets = require('./pets.js');

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
    },
}, {});

Pets.belongsTo(Clients, {foreignKey: 'id_client', allowNull: false });
Clients.hasMany(Pets, {foreignKey: 'id_client'});

module.exports = Clients;