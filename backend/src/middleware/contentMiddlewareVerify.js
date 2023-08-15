import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { bodegasDTO } from '../routes/dto/js/bodegaDTO.js';
import { inventariosDTO } from '../routes/dto/js/inventariosDTO.js';
import { productosDTO } from '../routes/dto/js/productosDTO.js';
import { updateInventariosDTO } from '../routes/dto/js/updateInventariosDTO.js';
// import { Router } from "express";
// const appMiddlewareCampusVerify = Router();

const contentMiddlewareBodegas = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(bodegasDTO, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareProductos = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(productosDTO, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareInventarios = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(inventariosDTO, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareUpdtInventarios = (req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(updateInventariosDTO, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
}


export {
    contentMiddlewareBodegas,
    contentMiddlewareProductos,
    contentMiddlewareInventarios,
    contentMiddlewareUpdtInventarios
}