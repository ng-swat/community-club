import {DELETE, UPDATE} from './admin-actions.service';
export function adminReducer(state = {}, action) {

  switch (action.type) {
    case DELETE: {
      return Object.assign({}, state, {adminData: {users: action.payload.users}});
      // return state;
    }
    case UPDATE: {
      return Object.assign({}, state, {adminData: {users: action.payload.users}});
    }

    default:
      return state;
  }
}
