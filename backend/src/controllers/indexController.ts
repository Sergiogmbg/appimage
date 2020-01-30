import { Request, Response } from 'express';

class IndexController {
    index(req: Request, res: Response) {
        res.json({'message':'Estás en el inicio'});
    }
}
export const indexController = new IndexController;