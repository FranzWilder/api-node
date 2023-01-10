import express from 'express'
import cors from 'cors'
import user from "../routes/usuarios.js"

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios'

        this.middlewares();
        //Middlewares
        //Rutas de mi aplicacion

        this.routes();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json())

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,user);
    }

    listen(){
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en puerto',this.port );
        });
    }
}

export default Server
