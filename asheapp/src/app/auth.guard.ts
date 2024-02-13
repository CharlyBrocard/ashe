import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('accessToken')) {
    return true;
  } else {
    return false
  }
};
