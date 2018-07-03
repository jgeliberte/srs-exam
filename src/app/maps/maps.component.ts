import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as myGlobals from 'globals'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  zoom: number = 6;

  lat:number;
  lng:number;
  sub:any;

  constructor(private route:ActivatedRoute) {
   this.lat = myGlobals.lat;
   this.lng = myGlobals.lng;
   console.log(myGlobals.lat);
   console.log(myGlobals.lng);
  }

  ngOnInit() {
	  this.sub = this.route.params.subscribe(params => {
      this.lat = params['lat'];
      this.lng = params['lng'];
      
    });
  }
}
