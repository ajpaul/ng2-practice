import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit{
    events: IEvent[];
   
   constructor(private eventService: EventService, 
        private aRoute:ActivatedRoute) {
   }

   ngOnInit() {
       //this data is actually sitting in the route, placed there by the resolver
       this.events = this.aRoute.snapshot.data['events'];
   }

}