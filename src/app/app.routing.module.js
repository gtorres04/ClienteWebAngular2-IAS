"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var consulting_ave_component_1 = require("./component/consulting.ave.component");
var add_ave_component_1 = require("./component/add.ave.component");
var list_ave_component_1 = require("./component/list.ave.component");
var edit_ave_component_1 = require("./component/edit.ave.component");
var delete_ave_component_1 = require("./component/delete.ave.component");
var routes = [
    { path: '', redirectTo: '/list-ave', pathMatch: 'full' },
    { path: 'consulting-ave', component: consulting_ave_component_1.ConsultingAveComponent },
    { path: 'add-ave', component: add_ave_component_1.AddAveComponent },
    { path: 'list-ave', component: list_ave_component_1.ListAveComponent },
    { path: 'edit-ave/:id', component: edit_ave_component_1.EditAveComponent },
    { path: 'delete-ave/:id', component: delete_ave_component_1.DeleteAveComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map