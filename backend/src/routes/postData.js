import { Router } from 'express';
import { postBodegaController, postInventarioController, postProductoController } from '../controllers/postDataController.js';
import { mongoErrorHandlingMiddleware } from '../middleware/mongoErrors.js';
import { middlewareContentLengthBodegas, middlewareContentLengthInventario, middlewareContentLengthProductos } from '../middleware/contentLength.js';
import { middlewareBodegasDTO, middlewareInventariosDTO, middlewareProductosDTO } from '../middleware/middlewareDTO.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/bodegas", middlewareContentLengthBodegas, middlewareBodegasDTO, postBodegaController)
    router.post("/productos", middlewareProductosDTO, middlewareContentLengthProductos, postProductoController)
    router.post("/inventario", middlewareContentLengthInventario, middlewareInventariosDTO, postInventarioController)

    return router;
}

export default postInitRoute