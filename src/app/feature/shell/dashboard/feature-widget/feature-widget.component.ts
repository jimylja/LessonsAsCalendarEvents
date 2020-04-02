import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {DriveFile} from '../../../../models/drive-file';
import {CalendarEntry} from '../../../../models/calendar';

export enum Widgets {
  'calendar' = 'Календар',
  'file' = 'Файл'
}
@Component({
  selector: 'app-feature-widget',
  templateUrl: './feature-widget.component.html',
  styleUrls: ['./feature-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureWidgetComponent implements OnChanges {
  @Input() data: DriveFile|CalendarEntry;
  @Input() featureType: 'calendar'|'file';
  widgetItem: string;
  titleKey: string;
  constructor() { }

  ngOnChanges() {
    this.widgetItem = Widgets[this.featureType];
    switch (this.featureType) {
      case 'calendar':
        this.titleKey = 'summary';
        break;
      case 'file': this.titleKey = 'name';
    }
  }
}
