import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers =[];

  checkNumber(values : {value : number}){
    this.numbers.push(values.value);
    console.log(values.value);

  }
  
}

