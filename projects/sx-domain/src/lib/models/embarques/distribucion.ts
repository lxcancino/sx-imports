import { DistribucionDet } from './distribucion-det';

export interface Distribucion {
  id: string;
  empresa: string;
  folio: number;
  embarque: number;
  nombre: string;
  fecha: string;
  contenedores: number;
  comentario: string;
  partidas: Partial<DistribucionDet>[];
  createUser: string;
  updateUser: string;
  dateCreated: string;
  lastUpdated: string;
}
