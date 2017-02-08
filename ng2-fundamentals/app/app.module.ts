import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index'
 
import { EventsAppComponent } from './events-app.component'
import { Error404Component } from './errors/404.component'
import { NavComponent } from './nav/nav.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent,
        EventDetailsComponent, 
        CreateEventComponent,
        Error404Component,
        NavComponent
    ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouteActivator,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved. Are you sure?');
    return true;
}