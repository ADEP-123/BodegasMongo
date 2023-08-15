import 'reflect-metadata';
import dotenv from 'dotenv';
// import { Router } from 'express';
import { jwtVerify } from 'jose';

dotenv.config();
// const appVerify = Router();

const authorizationMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).send({ status: 400, token: "Token no enviado" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
};

export {
    authorizationMiddleware,
};