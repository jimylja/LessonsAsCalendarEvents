import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackbarMessageComponent } from './components/snack-message/snackbar-message.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarMessageComponent
  ],
  entryComponents: [SnackbarMessageComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarMessageComponent,
    CommonModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule { }
