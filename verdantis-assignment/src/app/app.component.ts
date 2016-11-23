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
		'Select' : {
		name: 'Select',				
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
		'Date' : {
		name: 'Date',				
		arr:[],
		model:false
		}
	}];
	search = '';
	addItem(e , data){
		e.stopPropagation();
		if(data.model == false){
			data.arr.push(data.arr.length+1);
		} else {
			data.arr = [];
		}		
	}
	remove(data){
		data.model = false;
		data.arr = [];
	}

	clearAll() {		
		for(let obj of this.inputData){
			for(let key in obj){
				var val = obj[key];
				val.model = false;
				val.arr = [];
			}
		}
		this.search  = '';
	}

	add(data) {
		data.arr.push(data.arr.length+1);		
	}

	minus(data){
		data.arr.pop();
		if(data.arr.length < 1){
			data.model = false;
		}
	}
}
