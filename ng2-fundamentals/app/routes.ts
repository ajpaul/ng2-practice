import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
} from './events/index'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: '404', component: Error404Component },

    //property events = EventListResolver
    //when resolver is finished, add data to property called events on the route
    //needs to be consumed by that component
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full'}, //default route
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]