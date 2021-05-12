import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, name: string): any {
    let result = []
    for (const item of value){
      result.push(item[name]);
    }
    result = result.sort();
    console.log(result);
    let final=[]
    for (const item of result){
      for(const i of value){
        if(item === i[name]){
          final.push(i);
        }
      }
    }
    return final;
  }

}
