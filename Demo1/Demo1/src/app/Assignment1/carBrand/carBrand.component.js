"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBrandComponent = void 0;
var core_1 = require("@angular/core");
var CarBrandComponent = /** @class */ (function () {
    function CarBrandComponent() {
        this.carBrands = [
            { brandName: 'Hyundai', manufacturer: 'South Korean', imgurl: 'hyundai.png' },
            { brandName: 'Maruti Suzuki', manufacturer: 'India', imgurl: 'maruti.png' },
            { brandName: 'Toyota', manufacturer: 'Japan', imgurl: 'toyota.png' },
            { brandName: 'Honda', manufacturer: 'Japan', imgurl: 'honda.png' },
            { brandName: 'Ford', manufacturer: 'USA', imgurl: 'ford.png' },
            { brandName: 'Skoda', manufacturer: 'Czech', imgurl: 'skoda.png' },
            { brandName: 'Volkswagen', manufacturer: 'German', imgurl: 'https://imgd.aeplcdn.com/0X0/n/k7mnssa_1480126.jpg?q=85' },
            { brandName: 'BMW', manufacturer: 'German', imgurl: 'bmw.png' },
            { brandName: 'Mercedes-Benz', manufacturer: 'India', imgurl: 'mercedesbenz.png' },
            { brandName: 'Audi', manufacturer: 'German', imgurl: 'audi.png' },
            { brandName: 'Jaguar', manufacturer: 'British', imgurl: 'jaguar.png' }
        ];
        this.ddlselectedvalue = 'All';
    }
    CarBrandComponent.prototype.onChange = function (value) {
        this.ddlselectedvalue = value;
    };
    CarBrandComponent = __decorate([
        core_1.Component({
            selector: 'car-brand',
            templateUrl: 'app/Assignment1/carBrand/carBrand.component.html',
            styleUrls: ['app/Styles.css']
        })
    ], CarBrandComponent);
    return CarBrandComponent;
}());
exports.CarBrandComponent = CarBrandComponent;
//# sourceMappingURL=carBrand.component.js.map