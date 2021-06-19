import { UserListComponent } from './user-list-component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserRegistrationComponent,
    UserLayoutComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserListComponent,
    UserRegistrationComponent
  ],
  bootstrap : [UserLayoutComponent]
})
export class UserModule { }
