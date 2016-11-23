import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { KeysPipe } from './keys.pipe'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [FilterPipe , KeysPipe],

  // pipes : [FilterPipe]
  // pipes : [KeysPipe]
})
export class AppComponent {
  public inputData = [
  	{ 'Textbox' : {
		name: 'Textbox',				
		arr:[],
		model:false
		}
	},{
		'Radio' : {
		name: 'Radio',				
		arr:[],
		model:false
		}
	},{
		'Checkbox' : {
		name: 'Checkbox',				
		arr:[],
		model:false
		}
	},{
		'Terxtarea' : {
		name: 'Terxtarea',				
		arr:[],
		model:false
		}
	},{
		'Autocomplete' : {
		name: 'Autocomplete',				
		arr:[],
		model:false
		}
	}];

	addItem(e , data){
		e.stopPropagation();
		if(data.model == false){
			data.arr.push(data.arr.length+1);
		} else {
			data.arr = [];
		}		
	}

}
