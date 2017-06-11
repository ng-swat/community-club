import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select('user') public user;

  constructor() { }

  ngOnInit() {
  }

}
