import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
      em {
          float: right;
          color: #E05C65;
          padding-left: 10px;
      }
      .error input { background-color: #E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-input-placeholder { color: #999; }
      .error :-moz-input-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
    profileForm:FormGroup;   
    private firstName:FormControl;
    private lastName:FormControl;

    constructor(private auth:AuthService, private router:Router){}

    ngOnInit() {
        this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues){

        if(this.profileForm.valid) {
            this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['/events']);
        }
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    //get the values right off the controls...it's more direct
    validateFirstName(){
        if(this.firstName.invalid && this.firstName.touched)
            return false;
        
        return true;
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
}