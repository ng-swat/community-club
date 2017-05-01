import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DashBoardModule} from './dash-board/dash-board.module';
import {RouterModule} from '@angular/router';
import {stRouter} from './router/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashBoardModule,
    RouterModule,
    RouterModule.forRoot(stRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
