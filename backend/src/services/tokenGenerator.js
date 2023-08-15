import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT } from 'jose';
import { bodegasDTO } from '../routes/dto/js/bodegaDTO.js';
import { inventariosDTO } from '../routes/dto/js/inventariosDTO.js';
import { productosDTO } from '../routes/dto/js/productosDTO.js';
import { updateInventariosDTO } from '../routes/dto/js/updateInventariosDTO.js';

dotenv.config();
const appToken = Router();

appToken.use("/:collecion", async (req, res) => {
    try {
        let inst = plainToClass(eval(req.params.collecion), {}, { ignoreDecorators: true })
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("30m")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({ status: 201, message: jwt });
    } catch (error) {
        console.log(error);
        res.status(404).send({ status: 404, message: "Token solicitado no valido" });
    }
})

export {
    appToken,
};