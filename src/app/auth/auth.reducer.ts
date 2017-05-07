import {LOGIN, LOGIN_SUCCESS} from './actions.service';
export function authReducer(state = {}, action) {

  switch (action.type) {
    case LOGIN: {
      console.log('We are now in the reducer. We chose LOGIN and we set Pending to true.')
      return Object.assign({}, state, {pending: true});
    }
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.payload, pending: false, secureGroup: 'USER'});

    default:
    {
      console.log('Reducer reached default case, returning same state');
      return state;
    }
  }

}
