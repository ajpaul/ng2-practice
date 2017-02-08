import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared/index'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private eventService:EventService, private activatedRoute:ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])
    }
}