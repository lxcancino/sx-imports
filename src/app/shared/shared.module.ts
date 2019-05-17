import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { CovalentModule } from './covalent.module';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CovalentModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CovalentModule,
    ...components
  ]
})
export class SharedModule {}
