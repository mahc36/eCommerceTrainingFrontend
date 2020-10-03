import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Gender } from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.less']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {

  errorMessage: string;
  successful: boolean;
  formSent: boolean;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required])
  });

  get f(){
    return this.form.controls;
  }

  resetValue(){
    this.formSent = false;
    this.form.reset({name: '', lastName: '', email: '', gender: '', bornDate: ''});
  }

  getGenders(){
    return Object.keys(Gender);
  }

  submit(){
    this.formSent = true;
    if ( this.form.status === 'VALID' ){
      const user = {
        name: this.form.controls.name.value,
        lastName: this.form.controls.lastName.value,
        email: this.form.controls.email.value,
        gender: this.form.controls.gender.value,
        bornDate: null
      };
      this.subscription = this.userService.createUser(user).subscribe(
        () => {
          console.log('Created well');
          this.successful = true;
        },
        (error => {
          this.errorMessage = error;
          this.successful = false;
        })
      );
    }
    else {
      console.log('There are some errors to fix');
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
