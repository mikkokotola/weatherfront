import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Weather, sampleWeather } from './weather';
import { Location } from '../location-list/locations';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: Weather;
  weatherUrl = "https://i2iquw1htf.execute-api.eu-north-1.amazonaws.com/prod/weather"

  constructor(
    private http: HttpClient
  ) {
    this.weather = sampleWeather as unknown as Weather;
  }

  getWeather(location: Location): Observable<Weather> {
    console.log(`Getting weather for location ${JSON.stringify(location)}`);

    let params = new HttpParams().set('city', location.city.toLowerCase()).set('countrycode', location.countryCode.toLowerCase());
    return this.http.get<Weather>(this.weatherUrl, { params });

    // let headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':'GET,OPTIONS','Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'})
    // let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    //return this.http.get<Weather>(this.weatherUrl, {headers, params });
    //return of(sampleWeather as unknown as Weather);
  }
}
