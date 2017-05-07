import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


@Injectable()
export class Actions {

  constructor(private store: NgRedux<AppState>) {

  }

  login(userValue) {
    console.log('We are now at Action service, login method. Dispatching...')
    this.store.dispatch({
      type: LOGIN,
      payload: userValue
    });
  }

}
