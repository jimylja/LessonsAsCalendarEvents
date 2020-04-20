import { ChangeDetectionStrategy, Component, Input, ViewChild, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { Lesson } from '../../../../models/sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';

export interface SpreadsheetColumns {
  key: string;
  description: string;
  tooltip: string;
}
@Component({
  selector: 'app-lessons-tab',
  templateUrl: './lessons-tab.component.html',
  styleUrls: ['./lessons-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LessonsTabComponent implements OnChanges, OnInit {
  displayedColumns: string[] = ['number', 'date', 'order', 'location', 'topic', 'hwTheory', 'hwPractice'];
  columns: SpreadsheetColumns[] = [
    {key: 'number', description: '№', tooltip: 'Номер заняття, відносно планування'},
    {key: 'date', description: 'Дата', tooltip: 'Дата заняття'},
    {key: 'order', description: '№<div>(розкл.)</div>', tooltip: 'Номер заняття, відносно розкладу дзвінків'},
    {key: 'location', description: 'Каб.', tooltip: 'Кабінет, клас, аудиторія'},
    {key: 'topic', description: 'Тема', tooltip: 'Тема заняття'},
    {key: 'hwTheory', description: 'Теор.<div>(д. завд.)</div>', tooltip: 'Домашнє завдання: Теорія'},
    {key: 'hwPractice', description: 'Практ.<div>(д. завд.)</div>', tooltip: 'Домашнє завдання: Практика'},
  ];

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

  changeAttendeesPermission(isChecked: boolean): void {
    this.attendersChanged.emit(isChecked);
  }
}
