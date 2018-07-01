import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PhilippinesComponent } from './philippines/philippines.component';
import { RegionsComponent } from './regions/regions.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { MajorCitiesComponent } from './major-cities/major-cities.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';

let routeLists: Routes = [
  {path:'regions',component:  RegionsComponent},
  {path:'provinces',component: ProvincesComponent},
  {path:'city',component: MajorCitiesComponent},
  {path:'philippines',component: PhilippinesComponent},
  {path:'city',component: MapsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PhilippinesComponent,
    RegionsComponent,
    ProvincesComponent,
    MajorCitiesComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routeLists),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXt-SsYMc7XLYrWmpO7zWFsZo4W3SJqls'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
