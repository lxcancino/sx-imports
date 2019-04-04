import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  CovalentLayoutModule,
  CovalentCommonModule,
  CovalentMediaModule,
  CovalentLoadingModule
} from '@covalent/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    MatButtonModule,
    MatCardModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [LoginPageComponent]
})
export class SxiAuthModule {}
