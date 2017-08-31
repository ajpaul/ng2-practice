import { Injectable } from '@angular/core';
import { ICity } from './city.model';

@Injectable()
export class CityService {

    getCities():ICity[] {
        return CITIES;
    }
}

const CITIES:ICity[] = [
    {
        id: 1,
        name: 'Atlanta',
        color: '#4A6B8A'
    },
    {
        id: 2,
        name: 'Boise',
        color: '#133253'
    },
    {
        id: 3,
        name: 'Amsterdam',
        color: '#133253'
    }
]