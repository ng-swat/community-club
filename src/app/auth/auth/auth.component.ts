import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {select} from '@angular-redux/store';
import {Actions} from '../actions.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginForm: FormGroup;
  public auth: Actions;

  @select('user') public user;

  constructor(fb: FormBuilder,  auth: Actions) {
    this.auth      = auth;
    this.loginForm = fb.group({
      email   : null,
      password: null,
    });
  }

  ngOnInit() {
  }

}
