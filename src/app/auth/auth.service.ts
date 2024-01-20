import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  user = { isAdmin: true };

  checkPermission() {
    return of(this.user.isAdmin);
  }

  isLoggedIn() {
    return of(true);
  }
}
