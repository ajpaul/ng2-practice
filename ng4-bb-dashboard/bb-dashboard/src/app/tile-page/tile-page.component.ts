import { Component, OnInit } from '@angular/core';
import { ICity } from '../shared/city.interface';
import { CityService } from '../shared/city.service';
import { TimeTileComponent } from './time-tile/time-tile.component';

@Component({
  selector: 'tile-page',
  templateUrl: './tile-page.component.html',
  styleUrls: ['./tile-page.component.scss']
})
export class TilePageComponent implements OnInit {
  cities: ICity[];

  constructor(private cityService:CityService){}

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }
}
