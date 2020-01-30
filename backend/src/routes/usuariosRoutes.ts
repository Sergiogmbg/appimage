import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';

class UsuariosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/usuarios', usuariosController.create);
        this.router.get('/usuarios', usuariosController.read);
        this.router.put('/usuarios/:id', usuariosController.update);
        this.router.delete('/usuarios/:id', usuariosController.delete);
        this.router.get('/usuarios/:id', usuariosController.readone);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;