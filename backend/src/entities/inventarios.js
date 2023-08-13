import collectionGen from "../utils/db.js";
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

    async postNewInventario(id, bodega, producto, cantidad, creador) {
        try {
            const collection = await collectionGen("inventarios");
            const result = collection.insertOne({
                _id: id,
                id_bodega: bodega,
                id_producto: producto,
                cantidad: cantidad,
                created_by: creador,
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
export default Inventarios;