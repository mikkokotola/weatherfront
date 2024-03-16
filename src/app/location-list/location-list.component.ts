import { Component,  Output, EventEmitter } from '@angular/core';
import { Location } from './locations';
import { locations } from './locations';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  locations = [...locations];
  selectedLocation: Location | undefined;
  @Output() locationChange = new EventEmitter<Location>();

  onLocationChange() {
    this.locationChange.emit(this.selectedLocation);
  }
}
