import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SpreadsheetComponent],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class SpreadsheetModule { }
