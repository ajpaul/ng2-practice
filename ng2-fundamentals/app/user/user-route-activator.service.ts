import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'

@Injectable()
export class UserRouteActivator implements CanActivate {
    constructor(private auth:AuthService, private router:Router) {}

    canActivate() {
        const authenticated = this.auth.isAuthenticated();

        if(!authenticated)
            this.router.navigate(['/events']);

        return authenticated;
    }
}