"use strict";
var profile_component_1 = require('./profile.component');
var login_component_1 = require('./login.component');
var user_route_activator_service_1 = require('./user-route-activator.service');
exports.userRoutes = [
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [user_route_activator_service_1.UserRouteActivator] },
    { path: 'login', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=user.routes.js.map