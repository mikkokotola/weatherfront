import { Component } from '@angular/core';

import { locations } from './locations';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  locations = [...locations];

  showWeather() {
    window.alert('Weather!');
  }
}
