import { Producto } from '../producto';

export interface CompraDet {
  id?: string;
  producto: Partial<Producto>;
  clave?: string;
  descripcion?: string;
  solicitado: number;
  precio: number;
  descuento?: number;
  importe?: string;
  comentario?: string;
}
