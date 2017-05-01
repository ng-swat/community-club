import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import {MaterialUtilModule} from '../material-util/material-util.module';
import {RouterModule} from '@angular/router';
import {stRouter} from '../router/router';

@NgModule({
  imports: [
    MaterialUtilModule,
    RouterModule.forRoot(stRouter)
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
