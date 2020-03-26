import {ChangeDetectionStrategy, Component, Injector, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserFacade} from '../user.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userFacade: UserFacade,
    private injector: Injector) { }

  ngOnInit() {
    this.userFacade.loginStatus$.subscribe(
      isLogged => {
        if (isLogged) {
          const routerService = this.injector.get(Router);
          const ngZone = this.injector.get(NgZone);
          ngZone.run(() => {
            routerService.navigate(['/']).then();
          });
        }
      }
    );
  }

  signIn(): void {
    this.userFacade.login();
  }

}
