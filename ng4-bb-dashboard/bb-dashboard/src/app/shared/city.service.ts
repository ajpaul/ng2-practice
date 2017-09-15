import { Injectable } from '@angular/core';
import { ICity } from './city.interface';
import * as moment from 'moment';
import * as timezone from 'moment-timezone';

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
        time: timezone().tz('America/New_York').format('h:mma')
    },
    {
        id: 2,
        name: 'Boise',
        time: timezone().tz('America/Denver').format('h:mma')
    },
    {
        id: 3,
        name: 'Amsterdam',
        time: timezone().tz('Europe/Amsterdam').format('h:mma'),
    }
]