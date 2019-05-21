import { Linea } from './linea';
import { Marca } from './marca';
import { Clase } from './clase';

export interface Producto {
  id: number;
  clave: string;
  descripcion: string;
  unidad: string;
  linea: Partial<Linea>;
  marca: Partial<Marca>;
  clase: Partial<Clase>;
  kilos: number;
  gramos: number;
  largo: number;
  ancho: number;
  calibre: number;
  caras: number;
  acabado: string;
  color: string;
  m2: number;
  precioCredito: number;
  precioContado: number;
  claveProdSat: string;
  claveUnidadSat: string;
  unidadSat: string;
  dateCreated?: string;
  lastUpdated?: string;
  createUser?: string;
  updateUser?: string;

  swx: string;
}
