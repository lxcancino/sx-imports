import { Proveedor } from '../proveedor';
import { Embarque } from './embarque';

export interface CuentaDeGastos {
  id: string;
  empresa: string;
  folio: number;
  proveedor: Partial<Proveedor>;
  nombre: string;
  comentario?: string;
  referencia?: string;
  embarque: Partial<Embarque>;
  importe: number;
  impuestos: number;
  total: number;
}
