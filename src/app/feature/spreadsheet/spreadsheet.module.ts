import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';


@NgModule({
  declarations: [SpreadsheetComponent],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule
  ]
})
export class SpreadsheetModule { }
