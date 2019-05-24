import { Direccion } from './direccion';
import { BancoSat } from './sat';
import { ProveedorProducto } from './proveedor-producto';

export interface Proveedor {
  id: number;
  nombre: string;
  direccion?: Direccion;
  email?: string;
  www?: string;
  factorDeUtilidad: number;
  tipoDeCosteo: 'NORMAL' | 'ESPECIAL';
  rfc: string;
  nacional: boolean;
  lineaDeCredito: number;
  plazo: number;
  vencimentoBl: boolean;
  subCuentaOperativa: string;
  cuentaBancaria: string;
  bancoDestino: Partial<BancoSat>;
  paisDeOrigen: string;
  nacionalidad?: string;
  agenciaAduanal: boolean;
  tipo: string;
  productos: Partial<ProveedorProducto>[];
  dateCreated?: string;
  lastUpdated?: string;
  createUser?: string;
  updateUser?: string;
}
