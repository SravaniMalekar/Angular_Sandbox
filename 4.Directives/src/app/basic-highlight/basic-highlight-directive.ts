import { Directive, ElementRef, OnInit } from "@angular/core";

//Configuring the directive by creating object 
@Directive({
    //directive can be used as an attribute 
    selector: '[appBasicHighlight]'
})


export class BasicHighlightDirective implements OnInit{

    //whenever an instance of this class is created it will 
    //give a ref to the element on which directive is applied
    //private- this property can be used anywhere inside the class
    constructor(private elementRef: ElementRef){

    }

    //lifecycle hook
    ngOnInit(){
        //injects this style to the element 
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }
}