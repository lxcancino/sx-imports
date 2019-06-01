import { EmbarquesTableComponent } from './embarques-table/embarques-table.component';
import { EmbarqueCreateModalComponent } from './embarque-create/embarque-create-modal.component';

export const components: any[] = [
  EmbarquesTableComponent,
  EmbarqueCreateModalComponent
];

export const entryComponents: any[] = [EmbarqueCreateModalComponent];

export * from './embarques-table/embarques-table.component';
export * from './embarque-create/embarque-create-modal.component';
