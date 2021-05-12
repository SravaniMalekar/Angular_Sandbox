import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pjStatus = ['Stable','Critical','Finished'];
  forbiddenName = ['Test']

  signForm : FormGroup;

  ngOnInit(){
    this.signForm = new FormGroup({
      // 'project-name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'project-name': new FormControl(null, Validators.required, this.forbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project-status' : new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signForm.value)
  }

  // forbiddenNames(control : FormControl): {[s: string]: boolean}{
  //   if(this.forbiddenName.indexOf(control.value) !== -1){
  //     return {'nameIsForbidden' : true};
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject)=> {
      setTimeout( ()=> {
        if(control.value === 'Test'){
          resolve({'nameIsForbidden' : true});
        }else{
          resolve(null);
        }
      },1500);
      
    });
    return promise;
  }
}
