import { Router } from 'express';
import { putInventarioController } from '../controllers/putDataController.js';


const putInitRoute = () => {
    const router = Router()
    router.put("/inventario", putInventarioController)


    return router;
}

export default putInitRoute