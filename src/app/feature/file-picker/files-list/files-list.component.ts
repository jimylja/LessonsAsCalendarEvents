import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DriveResourcesService } from '../drive-resources.service';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriveFile } from '../../../models/drive-file';
import { FileFacade } from '../file.facade';

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
    private driveResourcesService: DriveResourcesService,
    private fileFacade: FileFacade
    ) { }

  ngOnInit() {
    this.filesData$ = combineLatest(
      this.fileFacade.activeFile$,
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
    this.fileFacade.selectFile(file);
    this.router.navigate(['/']);
  }

}
