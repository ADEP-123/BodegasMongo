import { collectionGen } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Inventarios {
    constructor() { }

    async getAllProducts() {
        try {
            const collection = await collectionGen("inventarios");
            const pipeline = [
                {
                    $lookup: {
                        from: "productos",
                        localField: "id_producto",
                        foreignField: "_id",
                        as: "product_info"
                    }
                },
                {
                    $unwind: "$product_info"
                },
                {
                    $group: {
                        _id: "$id_producto",
                        total: { $sum: "$cantidad" },
                        inventarios: { $push: "$$ROOT" },
                        Producto_ID: { $first: "$product_info._id" },
                        Producto_Nombre: { $first: "$product_info.nombre" },
                        Descripcion: { $first: "$product_info.descripcion" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        Producto_ID: 1,
                        Producto_Nombre: 1,
                        Descripcion: 1,
                        total: 1
                    }
                }
            ]
            const result = collection.aggregate(pipeline).sort({ total: -1 }).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async postNewInventario(bodega, producto, cantidad, creador) {
        let session
        try {
            const nuevaSesion = await counter.getNewId("inventarios")
            const { newId, session: newSession } = nuevaSesion;
            session = newSession;
            const inventarioCollection = await collectionGen("inventarios");
            const result = inventarioCollection.insertOne({
                _id: newId,
                id_bodega: bodega,
                id_producto: producto,
                cantidad: cantidad,
                created_by: creador,
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
    async contarCombinacion(bodega, producto) {
        try {
            const collection = await collectionGen("inventarios");
            const result = collection.countDocuments({ id_bodega: bodega, id_producto: producto });
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getCantidadCombinacion(bodega, producto) {
        try {
            const collection = await collectionGen("inventarios");
            const result = collection.aggregate([
                {
                    $match: { id_bodega: bodega, id_producto: producto }
                },
                {
                    $project: {
                        _id: 0,
                        cantidad: 1,
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateCantidadInventario(bodega, producto, cantidad) {
        try {
            const collection = await collectionGen("inventarios");
            const result = collection.updateOne(
                {
                    id_bodega: bodega,
                    id_producto: producto
                },
                {
                    $set: {
                        cantidad: cantidad,
                        updated_at: new Date()
                    }
                }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }




}
export default Inventarios;