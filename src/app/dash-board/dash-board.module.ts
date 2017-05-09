import {NgModule} from '@angular/core';
import {MaterialUtilModule} from '../material-util/material-util.module';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {ProfileModule} from '../profile/profile.module';
import {StoreModule} from '../store/store.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from '../home/home.module';
// import {AuthModule} from "../auth/auth.module";
import {ReactiveFormsModule} from '@angular/forms';
import {NgReduxModule} from '@angular-redux/store';
import {BrowserModule} from '@angular/platform-browser';
import {AdminModule} from '../admin/admin.module';
// import {AuthComponent} from "../auth/auth/auth.component";

@NgModule({
  imports: [
    BrowserModule,
    MaterialUtilModule,
    ProfileModule,
    StoreModule,
    RouterModule,
    HomeModule,
    ReactiveFormsModule,
    NgReduxModule,
    AdminModule
  ],
  declarations: [DashBoardComponent],
  exports: [DashBoardComponent]
})
export class DashBoardModule {



}
