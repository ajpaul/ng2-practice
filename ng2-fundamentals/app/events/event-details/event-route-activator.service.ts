import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const exists = !!this.eventService.getEvent(+route.params['id'])

        if(!exists)
            this.router.navigate(['/404']);

        return exists;
    }
}

//each route that you want to guard needs a route guard! It also needs to be specified as a provider