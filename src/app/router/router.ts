import {Routes} from '@angular/router';
import {ProfileComponent} from '../profile/profile/profile.component';
import {StoreComponent} from '../store/store/store.component';
import {HomeComponent} from '../home/home/home.component';
import {AuthComponent} from '../auth/auth/auth.component';
import {DashBoardComponent} from '../dash-board/dash-board/dash-board.component';
import {RegisterComponent} from '../auth/register/register.component';
import {AdminComponent} from '../admin/admin/admin.component';

export const stRouter: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'store', component: StoreComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent}

  // {
  //   path: '',
  //   component: DashBoardComponent,
  //   children: [
  //     {
  //       path: 'profile',
  //       component: ProfileComponent
  //     },
  //     {
  //       path: 'store',
  //       component: StoreComponent
  //     },
  //     {
  //       path: 'home',
  //       component: HomeComponent
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'login',
  //   component: AuthComponent
  // }


];

