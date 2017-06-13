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
var FiltroAve_1 = require("../domain/FiltroAve");
var Zona_1 = require("../domain/Zona");
var Generic_service_1 = require("../service/Generic.service");
var Ave_service_1 = require("../service/Ave.service");
var common_1 = require("@angular/common");
var ListAveComponent = (function () {
    function ListAveComponent(location, genericService, aveService) {
        this.location = location;
        this.genericService = genericService;
        this.aveService = aveService;
        this.mensajeOperacionEliminacion = undefined;
        this.filtrar = true;
        this.patronNombre = undefined;
    }
    ListAveComponent.prototype.ngOnInit = function () {
        this.getAves();
        this.getZonas();
    };
    /**
     * se otiene el listado de las aves registrados en base de datos.
     */
    ListAveComponent.prototype.getAves = function () {
        var _this = this;
        this.genericService.listAll("ave").then(function (listaDto) { return _this.aves = listaDto.list; });
    };
    /**
     * se otiene el listado de las aves registrados en base de datos.
     */
    ListAveComponent.prototype.getZonas = function () {
        var _this = this;
        this.genericService.listAll("zona").then(function (listaDto) { return _this.zonas = listaDto.list; });
    };
    /**
     * Regresamos a la vista (route) anterior.
     */
    ListAveComponent.prototype.goBack = function () {
        this.location.back();
    };
    ListAveComponent.prototype.listarPorFiltrar = function () {
        var _this = this;
        var filtroAve = new FiltroAve_1.FiltroAve();
        filtroAve.nombre = this.patronNombre;
        filtroAve.zonaDto = new Zona_1.Zona();
        filtroAve.zonaDto.codigo = "";
        this.aveService.findByNameAndZone(filtroAve).then(function (listaDto) { return _this.aves = listaDto.list; });
    };
    return ListAveComponent;
}());
ListAveComponent = __decorate([
    core_1.Component({
        selector: 'list-ave',
        templateUrl: '../views/list.ave.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [common_1.Location, Generic_service_1.GenericService, Ave_service_1.AveService])
], ListAveComponent);
exports.ListAveComponent = ListAveComponent;
//# sourceMappingURL=list.ave.component.js.map