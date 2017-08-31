import { Component, OnInit } from '@angular/core';
import { ICity } from '../shared/city.model';
import { CityService } from '../shared/city.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities: ICity[];

  constructor(private cityService:CityService){}

  ngOnInit() {
    this.cities = this.cityService.getCities();
    console.log(this.cities);
  }
}
