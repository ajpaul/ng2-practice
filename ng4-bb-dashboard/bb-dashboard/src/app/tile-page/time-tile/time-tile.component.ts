import  { Component, Input, AfterViewInit } from '@angular/core';
import  { ICity } from '../../shared/city.interface';

@Component({
    selector: 'time-tile',
    templateUrl: './time-tile.component.html',
    styleUrls: ['./time-tile.component.scss']
})

export class TimeTileComponent implements AfterViewInit {
    id: number;
    color: string;
    delay: string;
    @Input() city: ICity;

    constructor() {
        this.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }

    ngAfterViewInit() {
        console.log(this.city);
    }
}