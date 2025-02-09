import { Routes } from '@angular/router';

import { HomeComponent } from './view/pages/home/home.component';
import { UserListComponent } from './view/pages/user-list/user-list.component';
import { UserDetailComponent } from './view/pages/user-detail/user-detail.component';
import { UserFormComponent } from './view/pages/user-form/user-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'user-form', component: UserFormComponent },
];