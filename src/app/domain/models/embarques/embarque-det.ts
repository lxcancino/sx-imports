import { Producto } from '../producto';

export interface EmbarqueDet {
  id: string;
  producto: Partial<Producto>;
  factor?: number;
}
