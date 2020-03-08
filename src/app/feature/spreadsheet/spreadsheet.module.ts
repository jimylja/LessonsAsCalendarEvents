import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LessonsTabComponent } from './spreadsheet/lessons-tab/lessons-tab.component';

@NgModule({
  declarations: [SpreadsheetComponent, LessonsTabComponent],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class SpreadsheetModule { }
