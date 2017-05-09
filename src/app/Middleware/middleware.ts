import {LOGIN, LOGIN_SUCCESS} from '../auth/actions.service';
export const authMdl = store => next => action => {
  if (action.type === LOGIN) {
    console.log('We reached the Middleware.');
    setTimeout(() => {
      // next({type: LOGIN_SUCCESS, payload: {name: 'NIR'}});
      next({type: LOGIN_SUCCESS, payload: action.payload});
      // this.router.navigate(['/home']);
    }, 3000);
    return next(action);
  }
  return next(action);
};
