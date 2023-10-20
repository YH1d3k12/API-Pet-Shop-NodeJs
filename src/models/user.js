const { DataTypes } = require('sequelize');

const db = require('../database/database.js');

/*
 Roles:
    0 - Admin
    1 - Manager
    2 - Veterinarian
    3 - Client
*/

const Users = db.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
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


module.exports = Users;