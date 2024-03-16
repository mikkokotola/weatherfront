import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather-service/weather.service';
import { Weather } from '../weather-service/weather';
import { Location } from '../location-list/locations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  locationWeather: Weather | undefined = undefined;
  @Input() location: Location | undefined;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location']) {
      console.log(`In ngOnchanges`)
      const currentValue = changes['location'].currentValue;
      const previousValue = changes['location'].previousValue;
      console.debug(`Input value changed from ${JSON.stringify(previousValue)} to ${JSON.stringify(currentValue)}`);
      if (currentValue) {
        this.getWeather(currentValue);
      }
    }
  }

  getWeather(location: Location) {
    this.weatherService.getWeather(location).subscribe({
      next: (data) => this.locationWeather = data,
      error: (error) => console.error(error)
    });
  }

}
