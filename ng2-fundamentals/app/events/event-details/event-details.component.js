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
var core_1 = require('@angular/core');
var event_service_1 = require('../shared/event.service');
var router_1 = require('@angular/router');
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, activatedRoute) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        //this is only working the first time
        //snapshot is not an observable so it has problems updating!
        //we aren't subscribing to any changes! ID param may change (in the search modal)
        //this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])
        var _this = this;
        //updated observable way of doing things
        this.activatedRoute.params.forEach(function (params) {
            _this.event = _this.eventService.getEvent(+params['id']); //+ changes from a string to 
            _this.addMode = false; //take us out of addMode just in case we are in it
        });
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        //we need to assign a new id
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/event-details/event-details.component.html',
            styleUrls: ['app/events/event-details/event-details.component.css']
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map