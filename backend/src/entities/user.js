import { collectionGen, startTransaction } from "../utils/db.js";
class Users {
    constructor() { }

    async comprobarUsuario(id) {
        try {
            const collection = await collectionGen("users");
            const result = collection.countDocuments({ _id: id })
            return result;
        } catch (error) {
            throw error;
        }
    }

}
export default Users;