import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Actions} from '../../auth/actions.service';
// import {Actions} from "../../auth/actions.service";
// import {select} from "@angular-redux/store";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  @select('user') public user;

  public auth: Actions;
  constructor(auth: Actions) {
    this.auth = auth;
    this.user.name = 'Yonatan';


  }

  //
  // auth: Actions;
  // @select('user') public user;
  //
  // constructor(auth: Actions) {
  //   this.auth = auth;
  // }

  ngOnInit() {
  }

}
