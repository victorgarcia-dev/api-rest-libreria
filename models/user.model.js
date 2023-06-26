const{ DataTypes } = require('sequelize')
const  { sequelize } = require('../config/db.config');

const User = sequelize.define(
    "user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(150),
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
    }, {
        timestamps: true
    }
)

module.exports = User;