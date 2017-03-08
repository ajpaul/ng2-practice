import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
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

        //this is only working the first time
        //snapshot is not an observable so it has problems updating!
        //we aren't subscribing to any changes! ID param may change (in the search modal)
        //this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])

        //updated observable way of doing things
        this.activatedRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']); //+ changes from a string to 
            this.addMode = false; //take us out of addMode just in case we are in it
        })
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