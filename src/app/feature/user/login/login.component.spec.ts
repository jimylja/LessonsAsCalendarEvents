import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {UserFacade} from '../user.facade';
import { of } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {ShellComponent} from '../../shell/shell/shell.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {UserState} from '../state/user.reducer';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<UserState>;
  let location: Location;
  const initialState = {user: {isLoggedIn: false}};
  const routeStateMock: any = { snapshot: {}, url: 'user/login'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, ShellComponent ],
      imports: [RouterTestingModule.withRoutes(
        [{path: '', component: ShellComponent}, {path: 'user/login', component: LoginComponent}]
      )
      ],
      providers: [
        { provide: Location, useClass: SpyLocation },
        { provide: ActivatedRoute, useValue: routeStateMock},
        { provide: UserFacade, useValue: {user$: of(false), login: () => {}}},
        provideMockStore({initialState})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents().then();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to shell if user logged', fakeAsync(() => {
    fixture = TestBed.createComponent(LoginComponent);
    location = TestBed.get(Location);
    component.ngOnInit();
    fixture.ngZone.run(() => {
      fixture.detectChanges();
      expect(location.path()).toEqual('');
    });
  }));

  it('should dispatch login method after click on button', () => {
    spyOn(component, 'signIn').and.callThrough();
    const de = fixture.debugElement.query(By.css('button'));
    de.triggerEventHandler('click', null);
    expect(component.signIn).toHaveBeenCalled();
  });

});
