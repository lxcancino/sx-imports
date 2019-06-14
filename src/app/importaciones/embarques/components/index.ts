import { EmbarquesTableComponent } from './embarques-table/embarques-table.component';
import { EmbarqueCreateModalComponent } from './embarque-create/embarque-create-modal.component';
import { EmbarqueHeaderComponent } from './embarque-header/embarque-header.component';
import { EmbarqueTabsComponent } from './embarque-tabs/embarque-tabs.component';
import { ListaDeEmpaqueComponent } from './lista-de-empaque/lista-de-empaque.component';
import { EmbarquedetModalComponent } from './embarquedet-modal/embarquedet-modal.component';

export const components: any[] = [
  EmbarquesTableComponent,
  EmbarqueCreateModalComponent,
  EmbarqueHeaderComponent,
  EmbarqueTabsComponent,
  ListaDeEmpaqueComponent,
  EmbarquedetModalComponent
];

export const entryComponents: any[] = [
  EmbarqueCreateModalComponent,
  EmbarquedetModalComponent
];

export * from './embarques-table/embarques-table.component';
export * from './embarque-create/embarque-create-modal.component';
export * from './embarque-header/embarque-header.component';
export * from './embarque-tabs/embarque-tabs.component';
export * from './lista-de-empaque/lista-de-empaque.component';
export * from './embarquedet-modal/embarquedet-modal.component';
