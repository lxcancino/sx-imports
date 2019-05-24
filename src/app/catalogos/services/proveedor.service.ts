import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Proveedor, ProveedorProducto } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  list(): Observable<Proveedor[]> {
    return this.http
      .get<Proveedor[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Proveedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Proveedor>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(proveedore: Partial<Proveedor>): Observable<Proveedor> {
    return this.http
      .post<Proveedor>(this.apiUrl, proveedore)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Proveedor>): Observable<Proveedor> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Proveedor>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }

  productos(id: number): Observable<ProveedorProducto[]> {
    const url = `${this.apiUrl}/${id}/productos`;
    return this.http
      .get<ProveedorProducto[]>(url)
      .pipe(catchError(error => throwError(error)));
  }

  get apiUrl() {
    return this.config.buildApiUrl('proveedores');
  }
}
