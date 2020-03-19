import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DriveResourcesService } from '../drive-resources.service';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriveFile } from '../../../models/drive-file';
import { select, Store } from '@ngrx/store';
import * as fromFile from '../state';
import * as FileActions from '../state/file.actions';

export interface FilesData {
  activeFile: DriveFile;
  filesList: DriveFile[];
}

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilesListComponent implements OnInit {
  filesData$: Observable<FilesData>;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private driveResourcesService: DriveResourcesService,
    private store: Store<fromFile.State>
    ) { }

  ngOnInit() {
    this.filesData$ = combineLatest(
      this.store.pipe(select(fromFile.getCurrentFile)),
      this.driveResourcesService.getDriveSheets()
    ).pipe(
      map(data => {
        return {
          activeFile: data[0],
          filesList: data[1]
        };
      })
    );
  }

  fileSelectHandler(file: DriveFile) {
    this.store.dispatch(new FileActions.FileSelected(file));
    this.router.navigate(['/dashboard']);
  }

}
