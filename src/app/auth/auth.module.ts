import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth/auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import {Actions} from "./actions.service";
import {DashBoardComponent} from "../dash-board/dash-board/dash-board.component";
import {DashBoardModule} from "../dash-board/dash-board.module";

@NgModule({
  imports     : [CommonModule, ReactiveFormsModule, DashBoardModule],
  providers   : [Actions],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
