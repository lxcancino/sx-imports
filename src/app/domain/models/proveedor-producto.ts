export interface ProveedorProducto {
  id: number;
  clave: string;
  descripcion: string;
  codigo?: string;
  gramos: number;
  costoUnitario: number;
  factor?: number;
  unidad?: string;
}
