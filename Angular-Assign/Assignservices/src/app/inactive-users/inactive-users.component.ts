import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  inactiveUsers: string[];
  
  ngOnInit(){
    
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  constructor(private usersService: UsersService){

  }

  onSetToActive(id: number) {
    this.usersService.userSetToActive.emit(id);
  }
}
