import { Component, OnInit } from '@angular/core';
// import { AppState, getCurrentFile } from '../../../state/app.state';
import {select, Store} from '@ngrx/store';
import * as fromFile from '../../file-picker/state';
import {Observable} from 'rxjs';
import { DriveFile } from '../../../models/drive-file';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeFile$: Observable<DriveFile>;
  constructor(
    private store: Store<fromFile.State>
  ) { }

  ngOnInit() {
    this.activeFile$  = this.store.pipe(select(fromFile.getCurrentFile));
  }

}
