import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //set- unless works like a method with set; 
  //this will execute every time the input/condition is changed
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }

  //injecting the template to which this directive is applied
  //injecting the place where the template is rendered
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
