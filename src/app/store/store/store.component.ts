import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @select('user') public user;

  constructor() {
  }

  ngOnInit() {
  }

}
