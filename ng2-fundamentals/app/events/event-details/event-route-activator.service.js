"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var event_service_1 = require('../shared/event.service');
var EventRouteActivator = (function () {
    function EventRouteActivator(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivator.prototype.canActivate = function (route) {
        var exists = !!this.eventService.getEvent(+route.params['id']);
        if (!exists)
            this.router.navigate(['/404']);
        return exists;
    };
    EventRouteActivator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
    ], EventRouteActivator);
    return EventRouteActivator;
}());
exports.EventRouteActivator = EventRouteActivator;
//each route that you want to guard needs a route guard! It also needs to be specified as a provider 
//# sourceMappingURL=event-route-activator.service.js.map