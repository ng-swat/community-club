import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';
import {Actions} from 'app/auth/actions.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public auth: Actions;

  @select('user') public user;

  constructor(fb: FormBuilder,  auth: Actions) {
    this.auth      = auth;
    this.registerForm = fb.group({
      email   : null,
      password: null,
      name: null,
      surname: null,
      accepted: null
    });
  }

  ngOnInit() {
  }

}
