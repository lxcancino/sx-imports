import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { CovalentModule } from './covalent.module';

import { components } from './components';
import { pipes } from './pipes';

@NgModule({
  declarations: [...components, ...pipes],
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
    ...components,
    ...pipes
  ]
})
export class SharedModule {}
