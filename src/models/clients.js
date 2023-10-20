const { DataTypes } = require('sequelize');

const db = require('../database/database.js');

const Users = require('./user.js');
const Pets = require('./pets.js');


const Clients = db.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        field: 'id_user',
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11),
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


Pets.belongsTo(Clients, { foreignKey: 'id_client', allowNull: false });
Clients.hasMany(Pets, { foreignKey: 'id_client' });

Users.hasOne(Clients, { foreignKey: 'id_client', allowNull: false });
Clients.hasOne(Users, { foreignKey: 'id_client', allowNull: false });


module.exports = Clients;