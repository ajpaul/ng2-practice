import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'
import { CollapsibleWellComponent } from '../../common/collapsible-well.component'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions:ISession[];
    @Input() filterBy:string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        //don't react if the sessions haven't been set yet
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAscending) : this.visibleSessions.sort(sortByVotesDescending);
        }
    }

    filterSessions(filter){
        if (filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }

    }
}

function sortByNameAscending(s1: ISession, s2: ISession) {
    if(s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDescending(s1: ISession, s2:ISession) {
    return s2.voters.length - s1.voters.length; 
}