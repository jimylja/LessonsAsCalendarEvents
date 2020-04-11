import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePickerRoutingModule } from './file-picker-routing.module';
import { FilesListComponent } from './files-list/files-list.component';
import { FileItemComponent } from './files-list/file-item/file-item.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/file.reducer';

@NgModule({
  declarations: [FilesListComponent, FileItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('file', reducer),
    FilePickerRoutingModule,
    SharedModule,
  ]
})
export class FilePickerModule { }
