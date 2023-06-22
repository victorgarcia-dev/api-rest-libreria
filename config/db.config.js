const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("conexión a la base de datos establecida");
        await sequelize.sync({force : false});
    } catch (error) {
        console.log("hubo un error al inicializar a la base de datos");
    }
}

module.exports = {
    sequelize,
    initializeDB
}