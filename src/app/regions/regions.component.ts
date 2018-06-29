import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../regions.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
})

export class RegionsComponent implements OnInit {
  regions:string[];

  constructor(private ajax: RegionsService) {
    let json_regions = this.ajax.getJsonRegions();
    let list_of_regions = [];
    let data = json_regions;
    for (let counter = 0; counter < data.length; counter++) {
      if ($.inArray(data[counter].region.regions, list_of_regions) == -1) {
        list_of_regions.push(data[counter].region.regions);
      } 
    }
    
    this.regions = list_of_regions;
    console.log(this.regions);
  }

  ngOnInit() {
    
  }

  loadRegions() {
  
  }
}