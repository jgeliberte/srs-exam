import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvincesService } from '../provinces.service';
import { Globals } from 'globals';
import { AgmCoreModule } from '@agm/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})

export class ProvincesComponent implements OnInit {
  region:any;
  provinces:any;
  sub:any;
  json_provinces:any;
  lat:number;
  lng:number;
  constructor(private route:ActivatedRoute, private ajax: ProvincesService, private agm: AgmCoreModule) {
  	this.json_provinces = this.ajax.getJsonProvinces();
  }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  		this.region = params['region'];

	    let list_of_provinces = [];
	    let data = this.json_provinces;
	    for (let counter = 0; counter < data.length; counter++) {
	    	if (data[counter].region.regions == this.region) {
		    	for (let sub_counter = 0; sub_counter < data[counter].province.barangay_list.length; sub_counter++ ){
		      	list_of_provinces.push(data[counter].province.barangay_list[sub_counter]);
		      } 
	    	}
	    }
	    this.provinces = list_of_provinces;
	    console.log(this.provinces);
  	});
  }


  loadLatAndLongs(lat,lng) {

    console.log(lat);
    console.log(lng);
    
  }
}
