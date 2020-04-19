import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ActiveItemsFacade} from '../feature/active-items/active-items.facade';
import {ActiveItemsState} from '../feature/active-items/state/active-items.reducer';
import {mergeMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy {
  constructor(private activeItemsFacade: ActiveItemsFacade) { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      if (route.path === 'export') { return this.exportModuleStrategy(fn); }
      return fn();
    } else {
      return of(null);
    }
  }

  private exportModuleStrategy(fn): Observable<any> {
    return this.activeItemsFacade.activeItems$.pipe(
      mergeMap((activeItems: ActiveItemsState) => {
        const isCalendarAndSheetSelected = Boolean(activeItems.activeCalendar && activeItems.activeFile);
        return (isCalendarAndSheetSelected) ? fn() : of(null);
      })
    );
  }
}
