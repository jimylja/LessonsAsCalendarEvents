import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUser from '../../user/state';
import { Observable } from 'rxjs';
import {User} from '../../../models/user';
import * as UserActions from '../../../feature/user/state/user.actions';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.scss']
})
export class DashboardShellComponent implements OnInit {
  activeUser$: Observable<User>;

  constructor(private store: Store<fromUser.State>) { }

  ngOnInit() {
    this.store.dispatch(new UserActions.GetUser());
    this.activeUser$ = this.store.pipe(select(fromUser.getCurrentUser)).pipe();
  }

}
