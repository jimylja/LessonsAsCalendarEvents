import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {UserFacade} from '../user.facade';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {UserState} from '../state/user.reducer';
import {mockUser} from '../mock/user.mock';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let store: MockStore<UserState>;
  const initialState = {user: {isLoggedIn: false}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UserFacade,
        provideMockStore({initialState})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch logout method after click on button', fakeAsync(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    spyOn(component, 'logout').and.callThrough();
    component.activeUser$ = of(mockUser);
    tick();
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('button'));
    de.triggerEventHandler('click', null);
    expect(component.logout).toHaveBeenCalled();
  }));
});
