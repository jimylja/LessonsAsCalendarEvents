import {ChangeDetectionStrategy, Component, Injector, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {select, Store} from '@ngrx/store';
import * as fromUser from './state';
import * as UserActions from './state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private injector: Injector,
    private route: ActivatedRoute,
    private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.getLoginStatus)).subscribe(
      isLogged => {
        if (isLogged) {
          const routerService = this.injector.get(Router);
          const ngZone = this.injector.get(NgZone);
          ngZone.run(() => {
            routerService.navigate(['/'], );
          });
          // this.router.navigate(['/dashboard'], { relativeTo: this.route });
        }
      }
    );
  }

  singIn() {
    this.store.dispatch(new UserActions.Login());
  }

}
