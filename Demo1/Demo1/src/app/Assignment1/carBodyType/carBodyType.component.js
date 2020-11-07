"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBodyTypeComponent = void 0;
var core_1 = require("@angular/core");
var CarBodyTypeComponent = /** @class */ (function () {
    function CarBodyTypeComponent() {
        this.carBodyTypes = [
            { brandType: 'SUV/MUV', NoofSeater: '7 to 9', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg' },
            { brandType: 'HatchBack', NoofSeater: '4', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/hatchback_clr.svg' },
            { brandType: 'Sedan', NoofSeater: '5', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/sedan_clr.svg' },
            { brandType: 'Compact Sedan', NoofSeater: '5', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/compactsedan_clr.svg' },
        ];
    }
    CarBodyTypeComponent = __decorate([
        core_1.Component({
            selector: 'car-bodytype',
            templateUrl: 'app/Assignment1/carBodyType/carBodyType.component.html',
            styleUrls: ['app/Styles.css']
        })
    ], CarBodyTypeComponent);
    return CarBodyTypeComponent;
}());
exports.CarBodyTypeComponent = CarBodyTypeComponent;
//# sourceMappingURL=carBodyType.component.js.map