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
var AveService = (function () {
    function AveService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.protocolo = 'http://';
        this.servidor = 'localhost';
        this.puerto = '8181';
        this.contextApp = '/pruebatecnica-ws';
        this.tipoServicio = '/rest/api';
        this.url = this.protocolo + this.servidor + ":" + this.puerto + this.contextApp + this.tipoServicio;
    }
    AveService.prototype.findByNameAndZone = function (domain) {
        var urlCreate = this.url + "/ave/listByNomeAndZone";
        var data = JSON.stringify(domain);
        return this.http
            .post(urlCreate, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AveService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AveService;
}());
AveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AveService);
exports.AveService = AveService;
//# sourceMappingURL=Ave.service.js.map