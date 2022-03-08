import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarComponent } from './avatar.component';
import {mockUser} from '../../../feature/user/mock/user.mock';

describe('AppComponent', () => {
  let comp: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  const avatar = mockUser.avatar;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AvatarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    comp = fixture.debugElement.componentInstance;
    comp.avatar = avatar;

    fixture.detectChanges();
  });

  it('should create the avatar', () => {
    expect(comp).toBeTruthy();
  });

  it('background should be set equal to avatar image', () => {
    comp.ngOnInit();
    const avatarImage = comp.avatarComponent.nativeElement.style.backgroundImage;
    fixture.detectChanges();
    expect(avatarImage).toEqual(`url("${avatar}")`);
  });

});
