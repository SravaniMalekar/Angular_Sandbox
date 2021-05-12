import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any
    ): any {

    let Wordarray = value.split('');
    Wordarray.reverse();
    const string = Wordarray.join("");
    return string;

  }

}
