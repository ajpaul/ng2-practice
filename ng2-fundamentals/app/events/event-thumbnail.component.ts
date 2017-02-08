import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event: IEvent;

    setGreen(time) {
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        else if (this.event && this.event.time === '10:00 am')
            return ['red', 'bold'];

        return [];
    }
}