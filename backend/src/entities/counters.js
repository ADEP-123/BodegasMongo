import { collectionGen, startTransaction } from "../utils/db.js";
class Counters {
    constructor() { }

    async getNewId(coleccion) {
        const session = await startTransaction();

        try {
            const countersCollection = await collectionGen("counters");
            const counterDoc = await countersCollection.findOneAndUpdate(
                { _id: `${coleccion}Id` },
                { $inc: { sequence_value: 1 } },
                { session, returnOriginal: false, upsert: true }
            );
            const newId = Number(counterDoc.value.sequence_value + 1);
            await session.commitTransaction();
            return { newId: newId, session: session };
        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
    }
}
export default Counters;