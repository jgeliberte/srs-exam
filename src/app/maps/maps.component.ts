import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat: number = 14.599512;
  lng: number = 120.984222;
  constructor() { }

  ngOnInit() {
	  
  }
}
