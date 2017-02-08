import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
    selector: 'nav-component',
    templateUrl: 'app/nav/nav.component.html',
    styleUrls: ['app/nav/nav.component.css']
})

export class NavComponent {
    
    constructor(private auth:AuthService) {

    }
}