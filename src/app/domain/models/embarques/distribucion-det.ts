export interface DistribucionDet {
  id: string;
  empresa: string;
  sucursal: string;
  embarqueDet: string;
  contenedor: string;
  tarimas: number;
  cantidad: number;
  cantidadPorTarima: number;
  kilosNetos: number;
  comentarios: string;
  instrucciones: string;
  programacionDeEntrega?: string;
  fechaDeEntrada?: string;
}
