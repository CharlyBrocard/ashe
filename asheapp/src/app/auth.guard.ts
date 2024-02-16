import { CanActivateFn } from '@angular/router';
import { session } from '../session/session';

export const authGuard: CanActivateFn = (route, state) => {
  if(session.token != undefined) {
    return true;
  } else {
    return false
  }
};
