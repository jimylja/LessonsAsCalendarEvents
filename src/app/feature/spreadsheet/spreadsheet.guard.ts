import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, combineLatest } from 'rxjs';

import { select, Store } from '@ngrx/store';
import * as fromFile from '../file-picker/state';
import * as fromCalendar from '../calendar/state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetGuard implements CanActivate {
  isCalendarAndSheetSelected$: Observable<boolean>;

  constructor(private router: Router, private store: Store<fromFile.State>) {
    this.isCalendarAndSheetSelected$ = combineLatest(
      this.store.pipe(select(fromFile.getCurrentFile)),
      this.store.pipe(select(fromCalendar.getCurrentCalendar)))
    .pipe(
      map(states => {
        const isRouteEnabled = Boolean(states[0] && states[1]);
        if (!isRouteEnabled) {
          throw new Error('This route is not allowed');
        }
        return isRouteEnabled;
      })
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isCalendarAndSheetSelected$;
  }
}
