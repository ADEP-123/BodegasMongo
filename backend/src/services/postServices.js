import Bodegas from "../entities/bodegas.js";

const postBodegaService = async (id, nombre, responsable, estado, creador, actualizador) => {
    const bodega = new Bodegas();
    const result = await bodega.postNewBodega(id, nombre, responsable, estado, creador, actualizador);
    return result;
};
export {
    postBodegaService
}