import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user/user-list-component';
import {UserRegistrationComponent} from './user/user-registration/user-registration.component';
import {DataLayoutComponent} from './data/data-layout/data-layout.component';
import {RedirectToGuard} from './shared/guards/data/redirect-to.guard';
import {DataGridComponent} from './data/data-grid/data-grid.component';
import {DataListComponent} from './data/data-list/data-list.component';
import {UserLayoutComponent} from './user/user-layout/user-layout.component';
import {RedirecToUserGuard} from './shared/guards/user/redirec-to-user.guard';
import {NotFoundComponent} from './shared/https-states/not-found/not-found.component';
import {ForbiddenComponent} from './shared/https-states/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: DataLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        children: [],
        canActivate: [RedirectToGuard]
      },
      {path: 'data-grid', component: DataGridComponent},
      {path: 'data-list', component: DataListComponent}
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {path: '', children: [], canActivate: [RedirecToUserGuard]},
      {path: 'users', component: UserListComponent},
      {path: 'register', component: UserRegistrationComponent},
    ]
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: '**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
