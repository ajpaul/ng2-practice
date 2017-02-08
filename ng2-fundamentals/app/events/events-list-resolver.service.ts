import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable() 
export class EventListResolver implements Resolve<any> {

    constructor(private eventService:EventService){}

    //dont call subscribe here. We want an observable, not a subscription
    //needs to be consumed and listed as a provider
    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}