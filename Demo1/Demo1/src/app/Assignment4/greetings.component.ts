import { Component } from '@angular/core'
@Component({
    selector: 'my-greetings',
    templateUrl: 'app/Assignment4/greetings.component.html',
    styleUrls: ['app/Styles.css']
})
export class GreetingsComponent {
    name: string = 'Karthi';
    empId: number = 8029;
    dob: string = new Date().toUTCString();
}