import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     let keys = [];    
    for (let key in value) {
    	for(let k in value[key]){    		
      		keys.push({key: k, value: value[key][k]});
    	}
    }    
    return keys;
  }
  

}
