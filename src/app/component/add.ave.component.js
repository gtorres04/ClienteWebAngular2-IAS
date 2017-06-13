"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Generic_service_1 = require("../service/Generic.service");
var AddAveComponent = (function () {
    function AddAveComponent(location, genericService) {
        this.location = location;
        this.genericService = genericService;
        this.message = undefined;
        this.ave = { codigo: undefined, nombreComun: undefined, nombreCientifico: undefined, paises: undefined };
        this.paisesAdded = [];
    }
    AddAveComponent.prototype.ngOnInit = function () {
        this.getPaises();
    };
    /**
     * Agrega el pais seleccionado a la lista de paises del Ave en gestion.
     * @param pais
     */
    AddAveComponent.prototype.onChange = function (idPais) {
        this.addPais(this.getPais(idPais));
    };
    /**
     * se obtiene una instancia de Pais por el codigo de este.
     * @param idPais
     */
    AddAveComponent.prototype.getPais = function (idPais) {
        for (var i = 0; i < this.paises.length; i++) {
            if (idPais === this.paises[i].codigo) {
                return this.paises[i];
            }
        }
        return null;
    };
    /**
     * Se obtiene la lista de paises que existe en base de datos.
     */
    AddAveComponent.prototype.getPaises = function () {
        var _this = this;
        this.genericService.listAll("pais").then(function (listaDto) { return _this.paises = listaDto.list; });
    };
    /**
     * Se agrega un pais a la lista de paises de donde pertenece el ave que se va a registrar.
     * @param pais, pais a agregar a la lista de paises de donde pertenece el ave que se va a registrar.
     */
    AddAveComponent.prototype.addPais = function (pais) {
        this.paisesAdded.push(pais);
    };
    /**
     * Se elimina un pais de la lista de paises de donde pertenece el ave que se va a registrar.
     * @param pais, pais a eliminar de la lista de paises de donde pertenece el ave que se va a registrar.
     */
    AddAveComponent.prototype.deletePais = function (pais) {
        for (var i = 0; i < this.paisesAdded.length; i++) {
            if (pais.codigo === this.paisesAdded[i].codigo) {
                this.paisesAdded.splice(i, 1);
                break;
            }
        }
    };
    /**
     * Valida si un pais fue agregado a la lista de paises relacionados al ave en gestion.
     * @param pais, pais a validar.
     */
    AddAveComponent.prototype.isPaisAdded = function (pais) {
        for (var i = 0; i < this.paisesAdded.length; i++) {
            if (pais.codigo === this.paisesAdded[i].codigo) {
                return true;
                ;
            }
        }
        return false;
    };
    /**
     * Regresamos a la vista (route) anterior.
     */
    AddAveComponent.prototype.goBack = function () {
        this.location.back();
    };
    /**
     * Registra en base de datos el ave digitado en el formulario
     */
    AddAveComponent.prototype.registrar = function () {
        var _this = this;
        this.ave.paises = this.paisesAdded;
        this.genericService.create(this.ave, "ave").then(function (ave) { return _this.succes(ave); });
    };
    /**
     * Se obtiene el objeto ave al terminar el registro.
     * @param dto
     */
    AddAveComponent.prototype.succes = function (dto) {
        if (-1 == dto.codigo) {
            this.message = dto.descripcion;
        }
        else {
            this.ave = dto.object;
            this.message = dto.descripcion;
            this.paisesAdded = [];
            this.ave = { codigo: undefined, nombreComun: undefined, nombreCientifico: undefined, paises: undefined };
        }
    };
    return AddAveComponent;
}());
AddAveComponent = __decorate([
    core_1.Component({
        selector: 'add-ave',
        templateUrl: '../views/add.ave.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [common_1.Location, Generic_service_1.GenericService])
], AddAveComponent);
exports.AddAveComponent = AddAveComponent;
//# sourceMappingURL=add.ave.component.js.map