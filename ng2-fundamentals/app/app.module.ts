import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'
 
import { EventsAppComponent } from './events-app.component'
import { Error404Component } from './errors/404.component'
import { NavComponent } from './nav/nav.component'
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent} from './common/index'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'

//tell tsc to not worry about toastr
declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent,
        EventDetailsComponent, 
        CreateEventComponent,
        Error404Component,
        NavComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        DurationPipe
    ],
    providers: [ //four ways to register providers: useClass, useValue, useExisting, useFactory
        EventService, 
        { 
            provide: TOASTR_TOKEN, 
            useValue: toastr 
        }, 
        //EventRouteActivator, --> this is short hand for the line below
        { provide: EventRouteActivator, useClass: EventRouteActivator },
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {

}

//why is this in app module again? 
function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved. Are you sure?');
    return true;
}