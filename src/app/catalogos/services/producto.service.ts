import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Producto } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('productos');
  }

  list(): Observable<Producto[]> {
    return this.http
      .get<Producto[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Producto>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(producto: Partial<Producto>): Observable<Producto> {
    return this.http
      .post<Producto>(this.apiUrl, producto)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Producto>): Observable<Producto> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Producto>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
