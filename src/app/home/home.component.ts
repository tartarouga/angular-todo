import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  city = 'Tunis';
  wth: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.getCurrentWeather(this.city).subscribe((res) => {
      console.log(res)
      this.wth = res;
      console.log(this.wth)


    });
  }

  onSubmit(formulaire: NgForm) {

    this.weather.getCurrentWeather(formulaire.value.city).subscribe((res) => {
      console.log(formulaire)
      console.log(res);



      this.wth = res;



    });

  }
}
