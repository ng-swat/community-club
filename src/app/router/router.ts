import {Routes} from '@angular/router';
import {ProfileComponent} from '../profile/profile/profile.component';
import {StoreComponent} from '../store/store/store.component';
import {HomeComponent} from '../home/home/home.component';

export const stRouter: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'store', component: StoreComponent},
  {path: '', component: HomeComponent}
];

