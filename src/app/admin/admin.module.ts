import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {MaterialUtilModule} from '../material-util/material-util.module';
import {PrimeNGUtilModule} from "../prime-ngutil/prime-ngutil.module";
import { UsersComponent } from './admin/users/users.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialUtilModule,
    PrimeNGUtilModule,
    BrowserModule,
    FormsModule // Not sure if this is ok
  ],
  declarations: [AdminComponent, UsersComponent],
})
export class AdminModule { }
