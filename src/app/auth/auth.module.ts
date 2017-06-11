import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Actions} from './actions.service';
import {DashBoardComponent} from '../dash-board/dash-board/dash-board.component';
import {DashBoardModule} from '../dash-board/dash-board.module';
import {MaterialUtilModule} from '../material-util/material-util.module';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, DashBoardModule, MaterialUtilModule, RouterModule],
  providers   : [Actions],
  declarations: [AuthComponent, RegisterComponent],
  exports: [AuthComponent, RegisterComponent]
})
export class AuthModule { }
