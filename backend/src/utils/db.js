import { connection } from "../../db/atlas.js";

const collectionGen = async (coleccion) => {
    const db = await connection();
    const newCollection = db.collection(coleccion);
    return newCollection;
}

const startTransaction = async (coleccion) => {
    const db = await connection();
    const transaccion = db.startTransaction();
    return transaccion;
}
export {
    collectionGen,
    startTransaction
}