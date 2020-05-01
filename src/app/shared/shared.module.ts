import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackbarMessageComponent } from './components/snack-message/snackbar-message.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { ItemIconDirective } from './directives/item-icon.directive';
import { InViewportDirective } from './directives/in-viewport.directive';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MatListModule } from '@angular/material';
import { SpreadsheetButtonDirective } from './directives/spreadsheet-button.directive';
import { MenuItemComponent } from './components/menu-list/menu-item/menu-item.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarMessageComponent,
    AvatarComponent,
    ItemIconDirective,
    InViewportDirective,
    MenuListComponent,
    SpreadsheetButtonDirective,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    SnackbarMessageComponent,
    ItemIconDirective,
    InViewportDirective,
    MenuListComponent,
    SpreadsheetButtonDirective,
  ],
  entryComponents: [SnackbarMessageComponent],
})
export class SharedModule { }
