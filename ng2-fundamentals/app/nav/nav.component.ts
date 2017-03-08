import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/index'
import { EventService } from '../events/index'

@Component({
    selector: 'nav-component',
    templateUrl: 'app/nav/nav.component.html',
    styleUrls: ['app/nav/nav.component.css']
})

export class NavComponent {

    searchTerm: string = "";
    foundSessions: ISession[];
    
    constructor(private auth:AuthService, private eventService:EventService) {

    }

    //return list of found sessions
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        })
    }
}