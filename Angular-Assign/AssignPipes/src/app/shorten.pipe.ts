import { Pipe, PipeTransform } from "@angular/core";


//Declarator to set pipe name
@Pipe({
    name: 'shorten'
})
//creating a custom pipe
export class ShortenPipe implements PipeTransform{
    //value - value that should get transformed
    transform(value: any, limit: number){
        if(value.length > limit){
            return value.substr(0,limit) + ' ...';
        }else{
            return value;
        }
        
    }
}