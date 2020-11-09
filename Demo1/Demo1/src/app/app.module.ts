import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CarBrandComponent } from './Assignment1/carBrand/carBrand.component';
import { CarBodyTypeComponent } from './Assignment1/carBodyType/carBodyType.component';
import { CarFuelTypeComponent } from './Assignment1/FuelType/fuelType.component';
import { CaseCheckComponent } from './Assignment8/casecheck.component';
import { MyTimeComponent } from './Assignment2/interfacepgm.component';

import { MyWeekComponent } from './Assignment3/dayofweek.component';
@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, CarBrandComponent, CarBodyTypeComponent, CarFuelTypeComponent, MyTimeComponent, MyWeekComponent, CaseCheckComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
