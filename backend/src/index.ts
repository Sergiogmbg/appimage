import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';

/*creamos la clase server para el servidor de datos*/
class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use(usuariosRoutes);
    }

    start(): void {
        //crear escuchador
        this.app.listen(this.app.get('port'), () => console.log('El servidor está escuchando en el puerto', this.app.get('port'))); //en app tengo el metodo listen de express
    }

}

const server = new Server();
server.start();