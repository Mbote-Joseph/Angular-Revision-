import { Component } from '@angular/core';
import {MyserviceService }from './myservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Training Practice';
  todaydate;
  // declared array of months.

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];

  isavailable = true; //variable is set to true

  myClickFunction(event){
    this.isavailable=!this.isavailable
    console.log("The button has being clicked");
    alert("Thank you");
    console.log(event)
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
   }
   constructor( private myservice: MyserviceService){
   }
   ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    }
}
