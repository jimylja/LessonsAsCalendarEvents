import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {select, Store} from '@ngrx/store';
import * as fromUser from './../user/state';
import * as UserActions from './../user/state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.pipe(select(fromUser.getLoginStatus)).subscribe(
      isLogged => {
        if (isLogged) {
          this.router.navigate(['/'], { relativeTo: this.route });
        }
      }
    );
  }

  singIn() {
    this.store.dispatch(new UserActions.Login());
  }

}
