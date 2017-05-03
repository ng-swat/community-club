import { NgModule } from '@angular/core';
import {MaterialUtilModule} from '../material-util/material-util.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {ProfileModule} from '../profile/profile.module';
import {StoreModule} from '../store/store.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from '../home/home.module';

@NgModule({
  imports: [
    MaterialUtilModule,
    ProfileModule,
    StoreModule,
    RouterModule,
    HomeModule
  ],
  declarations: [DashBoardComponent],
  exports: [DashBoardComponent]
})
export class DashBoardModule { }
