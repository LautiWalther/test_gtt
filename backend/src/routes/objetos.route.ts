import express from 'express';
import { ObjetoController } from '../controllers/objetos.controller';

const router = express.Router();

// Definimos las rutas que se usan

router.get('/', ObjetoController.obtenerObjetos);
router.put('/', ObjetoController.actualizarObjeto);
router.post('/filtro', ObjetoController.obtenerObjetosConFiltro);

export default router;
