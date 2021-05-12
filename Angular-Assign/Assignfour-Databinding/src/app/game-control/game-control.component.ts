import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{value : number}>(); 
  ref;
  i=0; 
  constructor() { }
  

  ngOnInit(): void {
  }

  onGameStart(){
    
    this.ref = setInterval(()=>{
      this.gameStarted.emit({value : this.i+1});
      this.i++;
    },1000); 
    this.ref;

  }

  onGameEnd(){
    clearInterval(this.ref);
  }

}
