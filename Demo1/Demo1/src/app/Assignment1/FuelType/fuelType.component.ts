import { Component } from '@angular/core'
@Component({
    selector: 'car-fueltype',
    templateUrl: 'app/Assignment1/FuelType/fuelType.component.html',
    styleUrls: ['app/Styles.css']
})

export class CarFuelTypeComponent {
    carfuelTypes: any[] = [
        { fuelType: 'Petrol' },
        { fuelType: 'Diesel' },
        { fuelType: 'Eletric'},
        { fuelType: 'CNG' },
    ];



}