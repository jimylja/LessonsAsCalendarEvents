import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../../shared/shared.module';

import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { LessonsTabComponent } from './spreadsheet/lessons-tab/lessons-tab.component';
import { ColumnTitlePipe } from './column-title.pipe';
import { InvalidSpreadsheetComponent } from './spreadsheet/invalid-spreadsheet/invalid-spreadsheet.component';

@NgModule({
  declarations: [SpreadsheetComponent, LessonsTabComponent, ColumnTitlePipe, InvalidSpreadsheetComponent],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    SharedModule,
    MatRadioModule,
  ]
})
export class SpreadsheetModule { }
