import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser:IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Adam',
            lastName: 'Paul'
        }
    }

    //cast this value as a boolean for us to see if there is someone logged in
    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(first:string, last:string) {
        this.currentUser.firstName = first;
        this.currentUser.lastName = last;
    }
}