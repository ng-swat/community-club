import {Routes} from '@angular/router';
import {ProfileComponent} from '../profile/profile/profile.component';
import {StoreComponent} from '../store/store/store.component';
import {HomeComponent} from '../home/home/home.component';
import {AuthComponent} from '../auth/auth/auth.component';
import {DashBoardComponent} from '../dash-board/dash-board/dash-board.component';
import {RegisterComponent} from '../auth/register/register.component';

export const stRouter: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'store', component: StoreComponent},
  {path: '', component: HomeComponent},
  // {path: 'login', component: AuthComponent , children: [{path: 'register', component: RegisterComponent , outlet: 'reg'}]},
  // {path: 'register', component: RegisterComponent}
  {path: 'login', component: AuthComponent},
  {path: 'register', component: RegisterComponent}

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

