const { DataTypes } = require('sequelize');

const db = require('../database/database.js');

const Users = require('./users.js');


const Veterinarians = db.define('veterinarians', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(150),
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

Veterinarians.belongsTo(Users, { foreignKey: 'id_user', allowNull: false });


module.exports = Veterinarians;