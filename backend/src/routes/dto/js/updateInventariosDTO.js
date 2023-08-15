var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class updateInventariosDTO {
    constructor(data) {
        Object.assign(this, data);
        this.bodega1 = 1111;
        this.bodega2 = 1111;
        this.producto = 1111;
        this.cantidad = 1111;
    }
}
__decorate([
    Expose({ name: "bodega1" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id de la bodega de oriden es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateInventariosDTO.prototype, "bodega1", void 0);
__decorate([
    Expose({ name: "bodega2" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id de la bodega de destino es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateInventariosDTO.prototype, "bodega2", void 0);
__decorate([
    Expose({ name: "producto" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del producto es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateInventariosDTO.prototype, "producto", void 0);
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `La cantidad es requerida` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateInventariosDTO.prototype, "cantidad", void 0);
