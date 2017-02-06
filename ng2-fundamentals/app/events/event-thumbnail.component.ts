import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event: any;

    setGreen(time) {
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        else if (this.event && this.event.time === '10:00 am')
            return ['red', 'bold'];

        return [];
    }
}