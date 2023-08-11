import Bodegas from "../entities/bodegas.js";

const getAllBodegasService = async () => {
    const bodega = new Bodegas()
    const result = await bodega.getAllBodegas();
    return result;
};

export {
    getAllBodegasService
}