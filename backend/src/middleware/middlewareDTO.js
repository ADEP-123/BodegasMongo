import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { bodegasDTO } from '../routes/dto/js/bodegaDTO.js';
import { productosDTO } from '../routes/dto/js/productosDTO.js';

const middlewareBodegasDTO = (req, res, next) => {
    try {
        let data = plainToClass(bodegasDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
};

const middlewareProductosDTO = (req, res, next) => {
    try {
        let data = plainToClass(productosDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
};


export {
    middlewareBodegasDTO,
    middlewareProductosDTO
}