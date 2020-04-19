import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {PreloadingStrategyService} from './preloading-strategy.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActiveItemsFacade} from '../feature/active-items/active-items.facade';
import {Router} from '@angular/router';
import { of } from 'rxjs';

describe('PreloadingStrategyService', () => {
  const routeStateMock: any = {navigate: jasmine.createSpy('navigate'), url: '/calendars'};
  const mockNotPreloadingRoute = {path: 'user'};
  const mockPreloadingRoute = {path: 'export', data: {preload: true}};
  const mockActiveItemsState = {activeCalendar: {}, activeFile: {}};

  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({})],
    providers: [
      {provide: Router, useValue: routeStateMock},
      {provide: ActiveItemsFacade, useValue: {activeItems$: of(mockActiveItemsState)}}
    ],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: PreloadingStrategyService = TestBed.get(PreloadingStrategyService);
    expect(service).toBeTruthy();
  });

  it('should be preload depend on path', () => {
    const service: PreloadingStrategyService = TestBed.get(PreloadingStrategyService);
    const fn = () => of(true);
    service.preload(mockNotPreloadingRoute, fn).subscribe(data => {
      expect(data).toBeNull();
    });
    service.preload(mockPreloadingRoute, fn).subscribe(data => {
      expect(data).toBeTruthy();
    });
  });
});
