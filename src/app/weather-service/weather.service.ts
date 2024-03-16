import { Injectable } from '@angular/core';
import { Weather, sampleWeather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: Weather;
  constructor() {
    this.weather = sampleWeather as unknown as Weather;
  }
}
