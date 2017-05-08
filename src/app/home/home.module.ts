import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import {AuthModule} from '../auth/auth.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
    // AuthModule
  ],
  declarations: [HomeComponent, SlideShowComponent]
})
export class HomeModule { }
