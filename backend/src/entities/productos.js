import { collectionGen, startTransaction } from "../utils/db.js";
class Productos {
    constructor() { }

    async postNewProduct(nombre, descripcion, estado, creador) {
        const session = await startTransaction();

        try {
            const countersCollection = await collectionGen("counters");
            const counterDoc = await countersCollection.findOneAndUpdate(
                { _id: "productId" },
                { $inc: { sequence_value: 1 } },
                { session, returnOriginal: false, upsert: true }
            );

            const newBodegaId = counterDoc.value.sequence_value + 1;
            // console.log("id:", newBodegaId);

            const productosCollection = await collectionGen("productos");
            const result = productosCollection.insertOne({
                _id: newBodegaId,
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
            session.endSession();

            return result;
        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
    }

}
export default Productos;