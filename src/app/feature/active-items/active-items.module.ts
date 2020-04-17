import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ActiveItemsRoutingModule} from './active-items-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/active-items.reducer';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemComponent} from './items-list/item/item.component';

@NgModule({
  declarations: [ItemsListComponent, ItemComponent],
  imports: [
    CommonModule,
    ActiveItemsRoutingModule,
    StoreModule.forFeature('activeItems', reducer),
    SharedModule,
  ]
})
export class ActiveItemsModule { }
