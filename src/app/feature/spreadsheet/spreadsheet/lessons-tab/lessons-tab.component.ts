import { ChangeDetectionStrategy, Component, Input, ViewChild, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { Lesson } from '../../../../models/sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lessons-tab',
  templateUrl: './lessons-tab.component.html',
  styleUrls: ['./lessons-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsTabComponent implements OnChanges, OnInit {
  displayedColumns: string[] = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  dataSource: MatTableDataSource<Lesson>;
  @Input() colorId: any;
  @Input() colorsPalette: string[];
  @Input() lessons: Lesson[];
  @Input() form: FormGroup;
  @Input() tabIndex: number;
  @Output() tabCreated = new EventEmitter<void>();
  @Output() attendersChanged = new EventEmitter<boolean>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.tabCreated.emit();
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Lesson>(this.lessons);
    this.dataSource.paginator = this.paginator;
  }

  private changeAttendeesPermission(isChecked: boolean): void {
    this.attendersChanged.emit(isChecked);
  }
}
