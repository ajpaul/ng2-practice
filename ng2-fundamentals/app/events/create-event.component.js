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
var router_1 = require('@angular/router');
var CreateEventComponent = (function () {
    function CreateEventComponent(router) {
        this.router = router;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        console.log(formValues);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/create-event.component.html',
            styles: ["\n        em {\n            float: right;\n            color: #E05C65;\n            padding-left: 10px;\n        }\n        .error input { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n        .error ::-moz-input-placeholder { color: #999; }\n        .error :-moz-input-placeholder { color: #999; }\n        .error :ms-input-placeholder { color: #999; }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CreateEventComponent);
    return CreateEventComponent;
}());
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map