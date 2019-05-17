import { EmbarqueEffects } from './embarque.effects';
import { CompraEffects } from './compra.effects';
import { PedimentoEffects } from './pedimento.effects';
import { CuentaDeGastosEffects } from './cuenta-gastos.effects';
import { DistribucionEffects } from './distribucion.effects';

export const effects: any[] = [
  EmbarqueEffects,
  CompraEffects,
  PedimentoEffects,
  CuentaDeGastosEffects,
  DistribucionEffects
];

export * from './embarque.effects';
export * from './compra.effects';
export * from './pedimento.effects';
export * from './cuenta-gastos.effects';
export * from './distribucion.effects';
