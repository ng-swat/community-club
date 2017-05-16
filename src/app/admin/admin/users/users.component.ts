import {Component, OnInit} from '@angular/core';
import {User} from '../../../profile/personal-details/user.interface';
import {select} from '@angular-redux/store/lib/src';
import {AdminActionsService} from '../../admin-actions.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  @select(['adminData', 'users'])
  public users;
  public updateUser: FormGroup;
  public selectedUser: User;
  public displayDialog: boolean;
  public searchTxt: string;
  public actions: AdminActionsService;
  public tableVisible = true;

  constructor(actions: AdminActionsService, private builder: FormBuilder) {
    this.actions = actions;
    this.searchTxt = '';
    this.updateUser = builder.group({
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      balance: null
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.updateUser = this.builder.group({
      firstName: [this.selectedUser.firstName],
      lastName: [this.selectedUser.lastName],
      email: [this.selectedUser.email],
      phone: [this.selectedUser.phone],
      balance: [this.selectedUser.balance]
    });
    this.displayDialog = true;
  }

  refreshTable(): void {
    this.displayDialog = false;
    this.tableVisible = false;
    setTimeout(() => this.tableVisible = true, 0);
  }

  onDialogHide() {
    this.selectedUser = null;
  }


  ngOnInit() {

  }


}
