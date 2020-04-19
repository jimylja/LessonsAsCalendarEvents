import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {ItemsListComponent } from './items-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UserFacade} from '../../user/user.facade';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {MatMenuModule, MatSnackBarModule} from '@angular/material';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';
import {dummyUserCalendars} from '../mock/calendar.mock';
import {ActionList, ItemComponent} from './item/item.component';
import {of} from 'rxjs';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  const routeStateMock: any = {navigate: jasmine.createSpy('navigate'), url: '/calendars'};
  const listData = {
    activeItem: dummyUserCalendars[0],
    itemsList: dummyUserCalendars
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent, ItemComponent ],
      providers: [
        UserFacade,
        {provide: Router, useValue: routeStateMock},
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatMenuModule,
        StoreModule.forRoot({})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should redirect to dashboard after items was selected',
    inject([Router], (router: Router) => {
      spyOn(component, 'itemSelect').and.callThrough();
      component.itemSelect(dummyUserCalendars[0]);
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    })
  );

  it('should call itemSelected method, when select action was emitted in child component', () => {
    component.itemData$ = of(listData);
    spyOn(component, 'itemSelect').and.callThrough();
    fixture.detectChanges();
    const childFixture = fixture.debugElement.query(By.directive(ItemComponent));
    const childCmp = childFixture.componentInstance;
    childCmp.emitAction(ActionList.itemSelected, dummyUserCalendars[0]);
    expect(component.itemSelect).toHaveBeenCalled();
  });
});
