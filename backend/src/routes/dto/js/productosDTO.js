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
export class productosDTO {
    constructor(data) {
        Object.assign(this, data);
        this.nombre = "FAKE";
        this.descripcion = "Super Fake";
        this.estado = 1111;
        this.created_by = 1111;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El nombre es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], productosDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `La descripcion producto es requerida` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], productosDTO.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del estado es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productosDTO.prototype, "estado", void 0);
__decorate([
    Expose({ name: "creador" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del creador es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productosDTO.prototype, "created_by", void 0);
