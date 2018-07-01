import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 12.879721;
  lng: number = 121.77401699999996;
  zoom: number = 6;

  constructor() { }

  ngOnInit() {
	  
  }
}
