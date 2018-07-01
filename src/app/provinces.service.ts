import { Injectable } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
	getJsonProvinces() {
	  var value= $.ajax({ 
	      url: './assets/new_ph.json', 
	      dataType: 'JSON',
	      async: false
	   }).responseJSON;
	   return value;
	  }
  constructor() { }
}
