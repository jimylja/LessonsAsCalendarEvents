import {ChangeDetectionStrategy, Component, Input, ViewChild, OnChanges} from '@angular/core';
import {Lesson} from '../../../../models/sheet';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-lessons-tab',
  templateUrl: './lessons-tab.component.html',
  styleUrls: ['./lessons-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsTabComponent implements OnChanges {
  displayedColumns: string[] = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  @Input() lessons: Lesson[];
  dataSource: MatTableDataSource<Lesson>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Lesson>(this.lessons);
    this.dataSource.paginator = this.paginator;
  }


}
