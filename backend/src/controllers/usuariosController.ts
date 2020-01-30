import { Request, Response } from 'express';
import pool from '../routes/database';

class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estás en usuarios' });
    }

    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({mensaje: 'El usuario se ha creado correctamente.'});
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        const usuarios = await pool.query('UPDATE usuarios SET ? WHERE id = ?', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
    }

    public async readone(req: Request, res: Response) {
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id]);
        res.json(usuario);
    }
}
export const usuariosController = new UsuariosController;