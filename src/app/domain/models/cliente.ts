import { Direccion } from './direccion';

export interface Cliente {
  id: number;
  nombre: string;
  rfc: string;
  email: string;
  formaDePago: string;
  cuentaDePago: string;
  direccion: Direccion;
  subCuentaOperativa: string;
  dateCreated?: string;
  lastUpdated?: string;
  createUser?: string;
  updateUser?: string;
}
