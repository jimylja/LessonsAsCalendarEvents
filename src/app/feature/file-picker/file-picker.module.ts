import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePickerRoutingModule } from './file-picker-routing.module';
import { FilesListComponent } from './files-list/files-list.component';
import { FileItemComponent } from './files-list/file-item/file-item.component';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/file.reducer';

@NgModule({
  declarations: [FilesListComponent, FileItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    StoreModule.forFeature('file', reducer),
    FilePickerRoutingModule
  ]
})
export class FilePickerModule { }
