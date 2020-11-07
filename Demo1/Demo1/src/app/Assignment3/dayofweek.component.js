"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyWeekComponent = void 0;
var core_1 = require("@angular/core");
var MyWeekComponent = /** @class */ (function () {
    function MyWeekComponent() {
        this.enteredvalue = "1";
        this.dayvalue = '';
    }
    MyWeekComponent.prototype.getValue = function () {
        var _a;
        return this.dayvalue = (_a = WeekDays[this.enteredvalue]) !== null && _a !== void 0 ? _a : "Enter Correct Value";
    };
    MyWeekComponent = __decorate([
        core_1.Component({
            selector: 'my-week',
            templateUrl: 'app/Assignment3/dayofweek.component.html',
        })
    ], MyWeekComponent);
    return MyWeekComponent;
}());
exports.MyWeekComponent = MyWeekComponent;
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
})(WeekDays || (WeekDays = {}));
//# sourceMappingURL=dayofweek.component.js.map