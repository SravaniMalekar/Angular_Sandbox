import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCreated = false;
  buttonClicked = [];
  onCreate(){
    this.serverCreated = !this.serverCreated; 
    // this.buttonClicked.push(this.buttonClicked.length + 1);
    this.buttonClicked.push(new Date());
  }
}
