import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ActiveItemsFacade } from '../active-items/active-items.facade';
import { ActiveItemsState } from '../active-items/state/active-items.reducer';

@Injectable({
  providedIn: 'root'
})
export class EventsExportGuard implements CanActivate {
  isCalendarAndSheetSelected$: Observable<boolean>;

  constructor(private router: Router, private activeItemsFacade: ActiveItemsFacade) {
    this.isCalendarAndSheetSelected$ = this.activeItemsFacade.activeItems$.pipe(
      map((activeItems: ActiveItemsState) => {
        const isRouteEnabled = Boolean(activeItems.activeCalendar && activeItems.activeFile);
        if (!isRouteEnabled) {
          this.router.navigate(['']);
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
