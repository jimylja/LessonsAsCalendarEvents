import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DriveFile} from '../../../../models/drive-file';

@Component({
  selector: 'app-active-file-widget',
  templateUrl: './active-file-widget.component.html',
  styleUrls: ['./active-file-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveFileWidgetComponent implements OnInit {
  @Input() activeFile: DriveFile;
  constructor() { }

  ngOnInit() {
  }

}
