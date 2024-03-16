import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
    ])
  ],
  declarations: [
    WeatherComponent,
    LocationListComponent
  ],
  bootstrap: [
    WeatherComponent
  ]
})
export class AppModule { }
