import Bodegas from "../entities/bodegas.js";
import Inventarios from "../entities/inventarios.js";

const getAllBodegasService = async () => {
    const bodega = new Bodegas()
    const result = await bodega.getAllBodegas();
    return result;
};

const getAllProductsService = async () => {
    const inventario = new Inventarios()
    const result = await inventario.getAllProducts();
    return result;
};

export {
    getAllBodegasService,
    getAllProductsService
}