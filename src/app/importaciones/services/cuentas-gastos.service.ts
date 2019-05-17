import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { CuentaDeGastos } from '@app/domain/models/embarques';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class CuentaDeGastosService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('cuentasDeGasto');
  }

  list(): Observable<CuentaDeGastos[]> {
    return this.http
      .get<CuentaDeGastos[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<CuentaDeGastos> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<CuentaDeGastos>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(embarque: Partial<CuentaDeGastos>): Observable<CuentaDeGastos> {
    return this.http
      .post<CuentaDeGastos>(this.apiUrl, embarque)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<CuentaDeGastos>): Observable<CuentaDeGastos> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<CuentaDeGastos>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
