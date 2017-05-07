import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    // AuthModule
  ],
  declarations: [HomeComponent, SlideShowComponent]
})
export class HomeModule { }
