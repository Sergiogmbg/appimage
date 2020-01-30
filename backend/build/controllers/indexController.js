"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ 'message': 'Estás en el inicio' });
    }
}
exports.indexController = new IndexController;
