const { DataTypes } = require('sequelize');

const db = require('../database/database.js');

const Veterinarians = require('./veterinarians.js');
const Pets = require('./pets.js');


const Appointments = db.define('appointments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_veterinarian: {
        field: 'id_veterinarian',
        type: DataTypes.INTEGER,
        references: {
            model: Veterinarians,
            key: 'id'
        }
    },
    id_pet: {
        field: 'id_pet',
        type: DataTypes.INTEGER,
        references: {
            model: Pets,
            key: 'id'
        }
    },
    is_finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
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


Appointments.belongsTo(Pets, { foreignKey: 'id_pet', allowNull: false });
Pets.hasMany(Appointments, { foreignKey: 'id_pet', allowNull: false });

Appointments.belongsTo(Veterinarians, { foreignKey: 'id_veterinarian', allowNull: false });
Veterinarians.hasMany(Appointments, { foreignKey: 'id_veterinarian', allowNull: false });

module.exports = Appointments;