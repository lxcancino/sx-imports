import { UpperCaseFieldComponent } from './upper-case-field/upper-case-field.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { ProveedorFieldComponent } from './proveedor-field/proveedor-field.component';
import { MonedaFieldComponent } from './moneda-field/moneda-field.component';
import { TcFieldComponent } from './tc-field/tc-field.component';
import { PeriodoDialogComponent } from './periodo-dialog/periodo-dialog.component';
import { FechaFieldComponent } from './fecha-field/fecha-field.component';
import { ProveedorProductoFieldComponent } from './proveedor-productos-field/proveedor-productos-field.component';

export const components: any[] = [
  UpperCaseFieldComponent,
  PeriodoDialogComponent,
  FechaFieldComponent,
  TcFieldComponent,
  SearchTitleComponent,
  MonedaFieldComponent,
  ProveedorFieldComponent,
  ProveedorProductoFieldComponent
];

export * from './upper-case-field/upper-case-field.component';
export * from './fecha-field/fecha-field.component';
export * from './periodo-dialog/periodo-dialog.component';
export * from './tc-field/tc-field.component';
export * from './search-title/search-title.component';
export * from './moneda-field/moneda-field.component';
export * from './proveedor-field/proveedor-field.component';
export * from './proveedor-productos-field/proveedor-productos-field.component';
