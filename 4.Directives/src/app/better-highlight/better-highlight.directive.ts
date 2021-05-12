import { Directive, OnInit, Renderer2 , ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //Properties for dynamicallys setting values from outside
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //renderer - to inject DOM Manipulations to our element 
  //elRef - injecting ElementRef to which directive is applied
  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //setStyle()- to inject style to our element
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'blue');
  }
  

  //@HostListener('event')- when specified event occurs this function would work
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'transparent');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'blue');
    this.backgroundColor = this.defaultColor;
  }

  //Binding to a property
  //@HostBinding('property')- acccessing the property on which this directive placed
  @HostBinding('style.backgroundColor') backgroundColor : string ;
}
