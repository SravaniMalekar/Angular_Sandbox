import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";
  allowbutton = false;

  inputEnter(){
  if(this.userName != ""){
    this.allowbutton = true;
  }
  }

  

  onButtonClick(){
    this.userName = "";
  }
}
