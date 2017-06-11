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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var GenericService = (function () {
    function GenericService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.protocolo = 'http://';
        this.servidor = 'localhost';
        this.puerto = '8181';
        this.contextApp = '/pruebatecnica-ws';
        this.tipoServicio = '/rest/api';
        this.url = this.protocolo + this.servidor + ":" + this.puerto + this.contextApp + this.tipoServicio;
    }
    /**
     * Lista todas las entidades del dominio registrados en la base de datos.
     * @returns arreglo de objetos del dominio registrados en base de datos.
     */
    GenericService.prototype.listAll = function (nameDomain) {
        var urlListar = this.url + "/" + nameDomain + "/list";
        return this.http.get(urlListar)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenericService.prototype.findById = function (domain, nameDomain) {
        var urlCreate = this.url + "/" + nameDomain + "/findbyid";
        var data = JSON.stringify(domain);
        return this.http
            .post(urlCreate, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Crea una nueva antidad del dominio.
     * @param domain entidad del dominio a crear.
     * @returns la entidad del dominio creada, con el id correspondiente.
     */
    GenericService.prototype.create = function (domain, nameDomain) {
        var urlCreate = this.url + "/" + nameDomain + "/add";
        var data = JSON.stringify(domain);
        return this.http
            .post(urlCreate, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Crea una nueva antidad del dominio.
     * @param domain entidad del dominio a crear.
     * @returns la entidad del dominio creada, con el id correspondiente.
     */
    GenericService.prototype.update = function (domain, nameDomain) {
        var urlCreate = this.url + "/" + nameDomain + "/edit";
        var data = JSON.stringify(domain);
        return this.http
            .post(urlCreate, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /**
     * Eliminar registra de la base de datos.
     * @param domain, dominio a eliminar.
     * @param nameDomain, nombre en cadena del dominio.
     */
    GenericService.prototype.delete = function (domain, nameDomain) {
        var urlEliminar = this.url + "/" + nameDomain + "/eliminar-" + nameDomain;
        var data = JSON.stringify(domain);
        return this.http
            .post(urlEliminar, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GenericService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GenericService;
}());
GenericService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GenericService);
exports.GenericService = GenericService;
//# sourceMappingURL=Generic.service.js.map