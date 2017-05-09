import {Component, OnInit} from '@angular/core';
import {Users} from '../../../DAL/Users';
import {User} from '../../../profile/personal-details/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = Users;
  public filteredUsers = Users;
  public filterBucket: User[];
  public selectedUser: User;
  public displayDialog: boolean;
  public searchTxt: string;

  constructor() {
    // this.displayDialog = true;
    this.searchTxt = '';
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedUser = null;
  }

  filterList() {
    if (this.searchTxt === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((user) => {
        return user.firstName.toUpperCase().includes(this.searchTxt.toUpperCase()) ;
      });
      // this.filterBucket = [];
      // for (const user of this.users) {
      //   if (user.firstName.toUpperCase().indexOf(this.searchTxt.toUpperCase()) !== -1) {
      //     this.filterBucket.push(user);
      //   }
      // }
      // this.filteredUsers = this.filterBucket;
    }
  }

  ngOnInit() {

  }

}
