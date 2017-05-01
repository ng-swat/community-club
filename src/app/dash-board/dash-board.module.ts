import { NgModule } from '@angular/core';
import {MaterialUtilModule} from '../material-util/material-util.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {ProfileModule} from '../profile/profile.module';
import {StoreModule} from '../store/store.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    MaterialUtilModule,
    ProfileModule,
    StoreModule,
    RouterModule
  ],
  declarations: [DashBoardComponent],
  exports: [DashBoardComponent]
})
export class DashBoardModule { }
