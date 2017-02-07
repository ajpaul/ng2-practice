import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from './../common/toastr.service'

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
    events: any[];
   
   constructor(private eventService: EventService, private toastr: ToastrService) {
   }

   ngOnInit() {
       this.events = this.eventService.getEvents();
   }

// In order for this to be back in, you need to add:
//    (click)="handleThumbnailClick(event.name)"
// to the template on the <event-thumbnail> line
//
//    handleThumbnailClick(eventName) {
//        this.toastr.success(eventName);
//    }
}