import { collectionGen } from "../utils/db.js";
class Productos {
    constructor() { }

    async postNewProduct(id,nombre, descripcion, estado, creador) {
        try {        
            const productosCollection = await collectionGen("productos");
            const result = productosCollection.insertOne({
                _id: id,
                nombre: nombre,
                descripcion: descripcion,
                estado: estado,
                created_by: creador,
                update_by: null,
                created_at: new Date(),
                updated_at: null,
                deleted_at: null
            });
            return result;
        } catch (error) {
            throw error;
        }       
    }

}
export default Productos;