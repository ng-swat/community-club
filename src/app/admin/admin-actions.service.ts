import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';
import {User} from '../profile/personal-details/user.interface';

export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';

@Injectable()
export class AdminActionsService {
  constructor(private store: NgRedux<AppState>) {

  }

  delete(user) {
    const users: User[] = this.store.getState().adminData.users;
    this.store.dispatch({
      type: DELETE,
      payload: users.splice(users.indexOf(user), 1)
    });
  }

  update(updatedUser, selectedUser) {
    const users: User[] = this.store.getState().adminData.users;
    const index = users.indexOf(selectedUser);
    selectedUser.firstName = updatedUser.firstName;
    selectedUser.lastName = updatedUser.lastName;
    selectedUser.email = updatedUser.email;
    selectedUser.phone = updatedUser.phone;
    selectedUser.balance = updatedUser.balance;
    users[index] = selectedUser;
    this.store.dispatch({
      type: UPDATE,
      payload: users
    });
  }


}
