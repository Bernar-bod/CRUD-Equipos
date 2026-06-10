import {getEquipos} from '../controller/EquipoController.js';
import {getEquipo} from '../controller/EquipoController.js';
import {createEquipo} from '../controller/EquipoController.js';

import {Router} from 'express';
const router = Router();

router.get('/equipos', getEquipos);
router.get('/equipos/:id', getEquipo);
router.post('/equipos', createEquipo);  
export default router;