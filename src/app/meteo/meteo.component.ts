import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';
import { GeoDbService } from 'wft-geodb-angular-client';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';
import { GeoResponse } from 'wft-geodb-angular-client/lib/model/geo-response.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {


  wth: any;
  cities: any;

  constructor(private weather: WeatherService, private geoDbService: GeoDbService) { }

  ngOnInit() {

    this.geoDbService.findPlaces({

      countryIds: ["FR"],
      types: ["CITY"],
      limit: 10,
      offset: 0
    })
      .subscribe(
        (response: GeoResponse<PlaceSummary[]>) => {
          console.log(response.data)
          this.cities = response.data;


          // Do your thing!
        }
      );

  }

  onSubmit(formulaire: NgForm) {

    this.weather.getCurrentWeather(formulaire.value.city).subscribe((res) => {
      console.log(formulaire)
      console.log(res);
      this.wth = res;

    });
  }

}
