import { Component } from '@angular/core'
@Component({
    selector: 'car-brand',
    templateUrl: 'app/Assignment1/carBrand/carBrand.component.html',
    styleUrls: ['app/Styles.css']
})

export class CarBrandComponent {
    carBrands: any[] = [
        { brandName: 'Hyundai', manufacturer: 'South Korean', imgurl:'hyundai.png' },
        { brandName: 'Maruti Suzuki', manufacturer: 'India', imgurl: 'maruti.png' },
        { brandName: 'Toyota', manufacturer: 'Japan', imgurl: 'toyota.png' },
        { brandName: 'Honda', manufacturer: 'Japan', imgurl: 'honda.png' },
        { brandName: 'Ford', manufacturer: 'USA', imgurl: 'ford.png' },
        { brandName: 'Skoda', manufacturer: 'Czech', imgurl: 'skoda.png'},
        { brandName: 'Volkswagen', manufacturer: 'German', imgurl: 'https://imgd.aeplcdn.com/0X0/n/k7mnssa_1480126.jpg?q=85' },
        { brandName: 'BMW', manufacturer: 'German', imgurl: 'bmw.png'},
        { brandName: 'Mercedes-Benz', manufacturer: 'India', imgurl: 'mercedesbenz.png' },
        { brandName: 'Audi', manufacturer: 'German', imgurl: 'audi.png' },
        { brandName: 'Jaguar', manufacturer: 'British', imgurl: 'jaguar.png'}
    ];

    ddlselectedvalue: string='All';
    onChange(value:string): void {
        this.ddlselectedvalue = value;
    }
}