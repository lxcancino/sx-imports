import { LineaEffects } from './linea.effects';
import { ClaseEffects } from './clases.effects';
import { MarcaEffects } from './marca.effects';
import { ProductoEffects } from './productos.effects';
import { ClienteEffects } from './cliente.effects';
import { ProveedorEffects } from './proveedor.effects';
import { AduanaEffects } from './aduana.effects';
import { ProveedorProductoEffects } from './proveedor-producto.effects';

export const effects: any[] = [
  LineaEffects,
  ClaseEffects,
  MarcaEffects,
  ProductoEffects,
  ClienteEffects,
  ProveedorEffects,
  ProveedorProductoEffects,
  AduanaEffects
];

export * from './linea.effects';
export * from './clases.effects';
export * from './marca.effects';
export * from './productos.effects';
export * from './cliente.effects';
export * from './proveedor.effects';
export * from './proveedor-producto.effects';
export * from './aduana.effects';
