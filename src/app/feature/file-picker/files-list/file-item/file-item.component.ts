import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DriveFile} from '../../drive-file';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileItemComponent implements OnInit {
  @Input() fileItem: DriveFile;
  @Output() fileSelected = new EventEmitter<DriveFile>();

  constructor() { }

  ngOnInit() {
  }

  selectFile(file: DriveFile) {
    this.fileSelected.emit(file);
  }

}
