import { Direccion } from './direccion';

export interface Empresa {
  nombre: string;
  direccion: Direccion;
  rfc: string;
  regimen: string;
  numeroDeCertificado?: string;
  certificadoDigital?: any;
  certificadoDigitalPfx?: any;
  llavePrivada?: any;
  passwordPfx?: string;
  registroPatronal: string;
  versionDeCfdi: string;
  regimenClaveSat: string;
}
