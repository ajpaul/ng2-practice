"use strict";
var _404_component_1 = require('./errors/404.component');
var index_1 = require('./events/index');
exports.appRoutes = [
    { path: 'events/new', component: index_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: '404', component: _404_component_1.Error404Component },
    //property events = EventListResolver
    //when resolver is finished, add data to property called events on the route
    //needs to be consumed by that component
    { path: 'events', component: index_1.EventsListComponent, resolve: { events: index_1.EventListResolver } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, canActivate: [index_1.EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map