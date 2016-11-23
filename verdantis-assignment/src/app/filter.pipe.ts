import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: any): any {
  	if(search === undefined){
  		return value;
  	} 
  	return value.filter(function(vl){   	
  		return vl.key.toLowerCase().indexOf(search.toLowerCase()) > -1;
  	});
  }

}
