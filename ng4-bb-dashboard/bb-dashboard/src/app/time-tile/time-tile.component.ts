import  { Component, Input } from '@angular/core';
import  { ICity } from '../shared/city.model';

@Component({
    selector: 'time-tile',
    templateUrl: './time-tile.component.html',
    styleUrls: ['./time-tile.component.scss']
})

export class TimeTileComponent {
    id: number;
    @Input() city: ICity;

    constructor() {
        console.log(`City: ${this.city}`);

        let add = (x,y) => x + y;
        let result = add(1,1);
        console.log(result);
    }
}