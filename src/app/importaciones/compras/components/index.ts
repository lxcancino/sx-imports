import { ComprasTableComponent } from './compras-table/compras-table.component';
import { CompraFormComponent } from './compra-form/compra-form.component';
import { CompraPartidasComponent } from './compra-form/partidas/compra-partidas.component';
import { CompradetDialogComponent } from './compra-form/compradet-modal/compradet-modal.component';

export const components: any[] = [
  ComprasTableComponent,
  CompraFormComponent,
  CompraPartidasComponent,
  CompradetDialogComponent
];

export const entryComponents: any[] = [CompradetDialogComponent];

export * from './compras-table/compras-table.component';
export * from './compra-form/compra-form.component';
export * from './compra-form/partidas/compra-partidas.component';
export * from './compra-form/compradet-modal/compradet-modal.component';
