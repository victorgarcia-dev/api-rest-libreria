const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4000;

        //router librerias
        this.usersPath = "/api/library";

        //middleware
        this.middleware();
    }

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