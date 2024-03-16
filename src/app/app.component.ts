import { Component } from '@angular/core';
import { Location } from './location-list/locations';

@Component({
  // standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weatherfront';
  location : Location | undefined = undefined;

  onLocationSelected($event: Location) {
    console.log(`In onLocationSelected ${$event.city}, ${$event.countryCode}`)
    this.location = $event
  }
}

