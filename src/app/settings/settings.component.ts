import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private router: Router;
  constructor(private weather: WeatherService) { }

  ngOnInit() {

  }




}
