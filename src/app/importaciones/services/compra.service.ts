import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Compra } from '@app/domain/models/compras';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('compras');
  }

  list(): Observable<Compra[]> {
    return this.http
      .get<Compra[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: string): Observable<Compra> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Compra>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(compra: Partial<Compra>): Observable<Compra> {
    return this.http
      .post<Compra>(this.apiUrl, compra)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Compra>): Observable<Compra> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Compra>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
