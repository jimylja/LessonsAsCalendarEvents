import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpreadsheetComponent} from './spreadsheet/spreadsheet.component';


const routes: Routes = [
  {
    path: '',
    component: SpreadsheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsExportRoutingModule { }
