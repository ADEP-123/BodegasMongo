import { connection } from "../../db/atlas.js";

const collectionGen = async (coleccion) => {
    const db = await connection();
    const newCollection = db.collection(coleccion);
    return newCollection;
}
export default collectionGen