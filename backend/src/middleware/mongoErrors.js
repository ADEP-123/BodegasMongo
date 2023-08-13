import express from "express";

const mongoErrorHandlingMiddleware = express();
mongoErrorHandlingMiddleware.use((err, req, res, next) => {
    console.log("no entra");
    console.log(err.name);
    if (err.name == "MongoServerError") {
        const errorSchema = err.errInfo.details.schemaRulesNotSatisfied;
        if (errorSchema.length != 0) {
            let propiedades = errorSchema[0].propertiesNotSatisfied
            let arrCaract = []
            propiedades.forEach(element => {
                arrCaract.push(element.description)
            });
            console.log(arrCaract);
            err = {
                error: "Error en tipo de datos",
                datosErroneos: arrCaract
            }
        }
        res.status(121).json({ err })
    } else {
        next()
    }
});

export { mongoErrorHandlingMiddleware };