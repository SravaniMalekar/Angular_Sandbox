import { Component,
   OnInit, 
   Input, 
   ViewEncapsulation, 
   OnChanges, 
   SimpleChanges, 
   DoCheck, 
   AfterContentInit, 
   AfterContentChecked, 
   AfterViewInit, 
   AfterViewChecked, 
   OnDestroy,
   ViewChild,
   ElementRef,
   ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //styles from the server-element.component.css get applied only to server-element components
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit ,
OnChanges , 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  //Binding to custom properties
  //@Input() - allows to export our element so it can be used outside the component i.e it can receive its value from parent component
  //@Input('srvElement') - Assigning an alias to custom property; outside the component it will be referred as srvElement
  @ Input('srvElement') element: {type:string,name:string,content: string};
  @Input() name: string;
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef; 


  constructor() { 
    console.log('constructor called!');
  }

  //Lifecycle hooks
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log(this,this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log(this,this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
