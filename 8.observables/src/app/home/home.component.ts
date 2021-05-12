import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, filter} from 'rxjs/operators'

import { interval, observable, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
     //internal - a new event emitted every few milli seconds
    // this.firstObsSubscription =interval(1000).subscribe(count => {
    //   console.log(count);
    // })

  const customIntervalObservable = new Observable(observer =>{
    let count =0;
    setInterval(()=>{
      //emits a new event
      observer.next(count);
      if(count === 2){
        observer.complete();
      }
      if(count > 3){
        observer.error(new Error ('Count is greater than 3'));
      }
      count++;
    },1000);
  });

  //operators - data being recieved from the observable can be operated and then reaches the subs-thus observer


   this.firstObsSubscription=    customIntervalObservable.pipe(filter(data => {
     return data > 0;
   }),map((data:number)=> {
    return 'Round:' + (data + 1);
  })).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error.message);
        alert(error);
      }, ()=>{
        console.log('Completed');
      }
    );
  }
  
  ngOnDestroy(): void{
     this.firstObsSubscription.unsubscribe();
  }

}
