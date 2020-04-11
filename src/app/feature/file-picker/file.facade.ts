import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFile from './state';
import * as FileActions from './state/file.actions';
import {ParseError} from './state/file.reducer';

@Injectable(
  {providedIn: 'root'}
)
export class FileFacade {

  activeFile$ = this.store.select(fromFile.getCurrentFile);
  constructor(private store: Store<fromFile.State>) {}

  selectFile(file): void {
    this.store.dispatch(new FileActions.FileSelected(file));
  }

  validationFailed(errorMessage: ParseError): void {
    this.store.dispatch(new FileActions.ValidationFailed(errorMessage));
  }
}
