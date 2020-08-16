import { UserListComponent } from './user-list-component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserListComponent,
    UserRegistrationComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'users', component: UserListComponent},
      {path: 'register', component: UserRegistrationComponent}
    ]),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserListComponent,
    UserRegistrationComponent
  ]
})
export class UserModule { }
