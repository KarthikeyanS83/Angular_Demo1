"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFuelTypeComponent = void 0;
var core_1 = require("@angular/core");
var CarFuelTypeComponent = /** @class */ (function () {
    function CarFuelTypeComponent() {
        this.carfuelTypes = [
            { fuelType: 'Petrol' },
            { fuelType: 'Diesel' },
            { fuelType: 'Eletric' },
            { fuelType: 'CNG' },
        ];
    }
    CarFuelTypeComponent = __decorate([
        core_1.Component({
            selector: 'car-fueltype',
            templateUrl: 'app/Assignment1/FuelType/fuelType.component.html',
            styleUrls: ['app/Styles.css']
        })
    ], CarFuelTypeComponent);
    return CarFuelTypeComponent;
}());
exports.CarFuelTypeComponent = CarFuelTypeComponent;
//# sourceMappingURL=fuelType.component.js.map