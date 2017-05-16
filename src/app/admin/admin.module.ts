import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {MaterialUtilModule} from '../material-util/material-util.module';
import {PrimeNGUtilModule} from '../prime-ngutil/prime-ngutil.module';
import { UsersComponent } from './admin/users/users.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCouponComponent } from './admin/create-coupon/create-coupon.component';
import {NgReduxModule} from '@angular-redux/store';
import { UserFilterPipe } from './user-filter.pipe';
import {AdminActionsService} from './admin-actions.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtilModule,
    PrimeNGUtilModule,
    BrowserModule,
    FormsModule, // Not sure if this is ok
    NgReduxModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, UsersComponent, CreateCouponComponent, UserFilterPipe],
  providers: [AdminActionsService]
})
export class AdminModule { }
