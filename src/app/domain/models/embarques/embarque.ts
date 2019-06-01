import { Proveedor } from '../proveedor';
import { Aduana } from '../aduana';

export interface Embarque {
  id: string;
  empresa: string;
  folio: number;
  bl: string;
  proveedor: Partial<Proveedor>;
  nombre: string;
  fecha: string;
  aduana: Partial<Aduana>;
  aduanaNombre?: string;
  ingresoAduana: string;
  contenedores: number;
  comentario: string;
  moneda: 'MXN' | 'USD' | 'EUR';
  tipoDeCambio: number;
  liberado: string;
  partidas: any[];
  dateCreated: string;
  lastUpdated: string;
  createUser: string;
  updateUser: string;
}
