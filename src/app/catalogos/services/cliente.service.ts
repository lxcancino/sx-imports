import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Cliente } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  list(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Cliente>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(producto: Partial<Cliente>): Observable<Cliente> {
    return this.http
      .post<Cliente>(this.apiUrl, producto)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Cliente>): Observable<Cliente> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Cliente>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }

  get apiUrl() {
    return this.config.buildApiUrl('clientes');
  }
}
