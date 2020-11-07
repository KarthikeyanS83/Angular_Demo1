"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var carBrand_component_1 = require("./Assignment1/carBrand/carBrand.component");
var carBodyType_component_1 = require("./Assignment1/carBodyType/carBodyType.component");
var fuelType_component_1 = require("./Assignment1/FuelType/fuelType.component");
var interfacepgm_component_1 = require("./Assignment2/interfacepgm.component");
var dayofweek_component_1 = require("./Assignment3/dayofweek.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, carBrand_component_1.CarBrandComponent, carBodyType_component_1.CarBodyTypeComponent, fuelType_component_1.CarFuelTypeComponent, interfacepgm_component_1.MyTimeComponent, dayofweek_component_1.MyWeekComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map