import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { acudienteDTO } from '../routes/dto/js/bodegaDTO.js';

const middlewareTipoCitaDTO = (req, res, next) => {
    try {
        let data = plainToClass(acudienteDTO, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
};

export {
    middlewareTipoCitaDTO
}