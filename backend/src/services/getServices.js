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

const getCombinationProductStorageAmount = async (bodega, producto) => {
    const inventario = new Inventarios()
    const result = await inventario.contarCombinacion(bodega, producto);
    return result;
};

const getCantidadCombinacionService = async (bodega, producto) => {
    const inventario = new Inventarios()
    const result = await inventario.getCantidadCombinacion(bodega, producto);
    return result;
};

export {
    getAllBodegasService,
    getAllProductsService,
    getCombinationProductStorageAmount,
    getCantidadCombinacionService
}