import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import {MaterialUtilModule} from '../material-util/material-util.module';
import {RouterModule} from '@angular/router';
import {stRouter} from '../router/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PrimeNGUtilModule} from '../prime-ngutil/prime-ngutil.module';
import { LogComponent } from './log/log.component';
import { LogTableComponent } from './log/log-table/log-table.component';


@NgModule({
  imports: [
    MaterialUtilModule,
    RouterModule.forRoot(stRouter),
    ReactiveFormsModule,
    PrimeNGUtilModule
  ],
  declarations: [ProfileComponent, PersonalDetailsComponent, LogComponent, LogTableComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
