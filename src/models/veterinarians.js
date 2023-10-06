const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

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

module.exports = Veterinarians;