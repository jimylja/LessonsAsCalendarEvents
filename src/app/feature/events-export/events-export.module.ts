import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsExportRoutingModule } from './events-export-routing.module';
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
import { InvalidSpreadsheetComponent } from './spreadsheet/invalid-spreadsheet/invalid-spreadsheet.component';

@NgModule({
  declarations: [SpreadsheetComponent, LessonsTabComponent, InvalidSpreadsheetComponent],
  imports: [
    CommonModule,
    EventsExportRoutingModule,
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
export class EventsExportModule { }
