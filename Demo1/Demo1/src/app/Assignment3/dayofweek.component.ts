import { Component, Input } from '@angular/core'

@Component({
    selector: 'my-week',
    templateUrl: 'app/Assignment3/dayofweek.component.html',

})
export class MyWeekComponent {
    enteredvalue: string = "1";
    dayvalue: string='';
   
    getValue(): WeekDays {
        return this.dayvalue = WeekDays[this.enteredvalue] ?? "Enter Correct Value";
    }
}

enum WeekDays {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}