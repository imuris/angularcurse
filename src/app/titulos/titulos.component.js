"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TitulosComponent = /** @class */ (function () {
    function TitulosComponent() {
        this.nombre = "maria";
        this.apellido = 'emilia';
        this.alumno = {
            nombre: "carlos",
            apellido: "piñeda"
        };
        this.inputNuevo = "Soy emilia";
        this.correo = "";
        this.password = "";
        this.imgn = "https://img.archiexpo.es/pdf/repository_ae/59812/746-345861_1mg.jpg";
    }
    TitulosComponent.prototype.ngOnInit = function () {
    };
    TitulosComponent.prototype.ingresar = function () {
        console.log(this.correo);
        console.log(this.password);
    };
    TitulosComponent.prototype.llamarAlert = function () {
        alert("Has precionado 2 veces click");
    };
    TitulosComponent = __decorate([
        core_1.Component({
            selector: 'app-titulos',
            templateUrl: './titulos.component.html',
            styleUrls: ['./titulos.component.scss']
        })
    ], TitulosComponent);
    return TitulosComponent;
}());
exports.TitulosComponent = TitulosComponent;
