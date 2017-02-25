import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: Boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService:EventService, private activatedRoute:ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session:ISession) {

        //we need to assign a new id
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}