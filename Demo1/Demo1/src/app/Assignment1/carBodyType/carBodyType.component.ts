import { Component } from '@angular/core'
@Component({
    selector: 'car-bodytype',
    templateUrl: 'app/Assignment1/carBodyType/carBodyType.component.html',
    styleUrls: ['app/Styles.css']
})

export class CarBodyTypeComponent {
    carBodyTypes: any[] = [
        { brandType: 'SUV/MUV', NoofSeater: '7 to 9', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg' },
        { brandType: 'HatchBack', NoofSeater: '4', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/hatchback_clr.svg' },
        { brandType: 'Sedan', NoofSeater: '5', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/sedan_clr.svg' },
        { brandType: 'Compact Sedan', NoofSeater: '5', imgurl: 'https://imgd.aeplcdn.com/0x0/cw/body/svg/compactsedan_clr.svg' },
    ];

    btnText: string = 'HIDE';

    btnclick(): void {
        this.btnText = this.btnText == 'SHOW' ? 'HIDE' : 'SHOW';
    }

}