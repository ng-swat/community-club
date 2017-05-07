import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DashBoardModule} from './dash-board/dash-board.module';
import {RouterModule} from '@angular/router';
import {stRouter} from './router/router';
import {combineReducers} from "redux";
import {authReducer} from 'app/auth/auth.reducer';
import {NgRedux} from "@angular-redux/store";
import {authMdl} from "./Middleware/middleware";
import {AuthModule} from "./auth/auth.module";
// import {AuthModule} from "./auth/auth.module";


const rootReducer = combineReducers({
  user: authReducer
})

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashBoardModule,
    RouterModule,
    RouterModule.forRoot(stRouter),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [authMdl]);
  }
}
