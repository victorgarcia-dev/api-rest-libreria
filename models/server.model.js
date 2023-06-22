const express = require('express');
const { initializeDB } = require('../config/db.config');

class Server {
    constructor(){
        this.app = express();

        //puerto
        this.port = process.env.PORT || 4000;

        //router librerias
        this.usersPath = "/api/library";

        //inicializar DB
        this.connectDB();

        //middleware
        this.middleware();
    }

    //conexión a la base de datos
    async connectDB(){
        await initializeDB();  
    }

    //servicios
    middleware() {
        //lectura y parseo del body
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`port => ${this.port}`);
        })
    }
}

module.exports = Server;