import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string};
  //to store subscription
  paramsSubscription : Subscription

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    //this.route.snapshot.params['parameters'] - all the parametres 
    //which were defined in the app.module can be accessed from here
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //this.route.params -  params is an observable
    //observable used to subscribe to asynchronous events
    //.subsrcibe can take 3 functions as arguments
    //1st func - executed when new data is sent through the param 
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          //updating parameters
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );

  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
