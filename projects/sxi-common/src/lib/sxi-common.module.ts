import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SxDomainModule } from 'sx-domain';
import { SxiMaterialModule } from 'sxi-material';
import { ProveedorFieldComponent } from './proveedor-field/proveedor-field.component';

@NgModule({
  declarations: [ProveedorFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SxDomainModule,
    FlexLayoutModule,
    SxiMaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SxDomainModule,
    FlexLayoutModule,
    SxiMaterialModule,
    ProveedorFieldComponent
  ]
})
export class SxiCommonModule {}
