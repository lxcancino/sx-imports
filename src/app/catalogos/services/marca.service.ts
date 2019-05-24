import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Marca } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  list(): Observable<Marca[]> {
    return this.http
      .get<Marca[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Marca> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Marca>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(marca: Partial<Marca>): Observable<Marca> {
    return this.http
      .post<Marca>(this.apiUrl, marca)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Marca>): Observable<Marca> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Marca>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }

  get apiUrl() {
    return this.config.buildApiUrl('marcas');
  }
}
