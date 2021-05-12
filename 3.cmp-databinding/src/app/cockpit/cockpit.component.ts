import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Binding to custom events
  //@Output()- our event can pass data out of the component
  //@Output('name')- Assigning alias to a custom event 
  //new EventEmitter<type of data our event is going to emit>() - to make our properties events that can be emitted
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();  
  // newServerName = '';
  // newServerContent = '';
  //ViewChild('selector',{static:true})- Declarator to fetch local reference ;{static:true}- used only if 
  // ref is being called within ngOnInit 
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  //Name is being passed using local ref: HTML Element is received
  //Content is being passed through serverContentInput property i.e of Element Reference type
  onAddServer(nameInput: HTMLInputElement) {
    //emit a new event of serverCreated type
    this.serverCreated.emit({
      // serverName: this.newServerName, 

      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value      
    });  
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //emit a new event of blueprintCreated type
    this.blueprintCreated.emit({

      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value}); 
  }
}
