import { collectionGen } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Productos {
    constructor() { }

    async postNewProduct(nombre, descripcion, estado, creador) {
        let session
        try {
            const nuevaSesion = await counter.getNewId("bodegas")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const productosCollection = await collectionGen("productos");
            const result = productosCollection.insertOne({
                _id: newId,
                nombre: nombre,
                descripcion: descripcion,
                estado: estado,
                created_by: creador,
                update_by: null,
                created_at: new Date(),
                updated_at: null,
                deleted_at: null
            });
            await session.commitTransaction();
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

}
export default Productos;