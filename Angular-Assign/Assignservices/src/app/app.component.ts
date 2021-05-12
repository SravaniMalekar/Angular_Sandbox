import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent{


  constructor(private usersService: UsersService ){
    this.usersService.userSetToActive.subscribe(
      (id:number)=> {
        this.usersService.setActive(id);
      })
  
    this.usersService.userSetToInactive.subscribe(
      (id:number)=> {
          this.usersService.setInactive(id);
        })
  }




}
