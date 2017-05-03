import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, SlideShowComponent]
})
export class HomeModule { }
