import routerx from 'express-promise-router';
import CobradoresController from "../controllers/CobradoresController";
import jwt from 'jsonwebtoken';
import { verificaToken } from '../middlewares/autenticacion';

const router = routerx();

router.post('/add',verificaToken,CobradoresController.add);
router.get('/query',verificaToken,CobradoresController.query);
router.get('/list',verificaToken,CobradoresController.list);
router.put('/update',verificaToken,CobradoresController.update);
router.delete('/remove',verificaToken,CobradoresController.remove);

export default router;