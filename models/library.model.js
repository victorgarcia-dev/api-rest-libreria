const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.config')

const Library = sequelize.define('Librarys', {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Library;