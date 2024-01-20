import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { MailViewComponent } from './mail-view.component';
import { Observable } from 'rxjs';

@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(
    component: MailViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('🚀 ~ MailViewGuard ~ component:', component);

    if(component.hasUnsaveChanges) {
        return window.confirm('Are you sure you want to leave?')
    }

    return true;
  }
}
