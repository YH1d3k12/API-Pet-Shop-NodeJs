const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Pets = sequelize.define('pets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

Pet.associate = (models) => {
    Pet.belongsTo(models.Client, { foreignKey: 'id_client', allowNull: false });
};

module.exports = Pets;