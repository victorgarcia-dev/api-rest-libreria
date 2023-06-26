const{ DataTypes } = require('sequelize')
const  { sequelize } = require('../config/db.config');

const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    year: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    paranoid: true,
    timestamps: true
});

module.exports = Book;