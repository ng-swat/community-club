import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {MaterialUtilModule} from '../material-util/material-util.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtilModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
