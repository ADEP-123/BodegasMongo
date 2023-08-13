import { Router } from 'express';
import { getBodegasController, getProductsController } from '../controllers/getDataController.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/bodegas", getBodegasController)
    router.get("/products", getProductsController)

    return router;
}

export default getInitRoute