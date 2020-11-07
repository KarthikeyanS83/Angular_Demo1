import { Component } from '@angular/core'
import { ImyTime } from './Imytime'
@Component({
    selector: 'my-time',
    template: `<div>Current Date & Time : {{crntdt}}`
})

export class MyTimeComponent implements ImyTime {
    //var today = new Date();
    constructor() {
        this.crntdt = new Date().toString();
        console.log(this.crntdt);
    }
    crntdt: string = '';
    //logmethod(crntdt: string): void {
    //    console.log(crntdt);
    //}
}