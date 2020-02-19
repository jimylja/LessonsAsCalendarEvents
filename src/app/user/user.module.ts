import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserModule { }
