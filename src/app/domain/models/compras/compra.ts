import { Proveedor } from '../proveedor';
import { CompraDet } from './compra-det';

export interface Compra {
  id: string;
  folio: number;
  empresa: string;
  proveedor: Partial<Proveedor>;
  nombre: string;
  fecha: string;
  entrega: string;
  depuracion: string;
  papelFolio?: number;
  comentario: string;
  moneda: 'MXN' | 'USD' | 'EUR';
  tipoDeCambio: number;
  importe: number;
  descuentos: number;
  subtotal: number;
  impuestos: number;
  total: number;
  partidas: Partial<CompraDet>[];
  dateCreated?: string;
  lastUpdated?: string;
  createUser?: string;
  updateUser?: string;
}
