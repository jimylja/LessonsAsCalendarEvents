import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { UserFacade} from '../user.facade';
import { By} from '@angular/platform-browser';
import { of} from 'rxjs';
import { mockUser} from '../mock/user.mock';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { MatTableModule } from '@angular/material/table';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  const initialState = {user: {isLoggedIn: false}};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [
        HttpClientTestingModule, MatTableModule
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
