import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule
  ],
  declarations: [
    AppComponent,
    LocationListComponent,
    WeatherComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
