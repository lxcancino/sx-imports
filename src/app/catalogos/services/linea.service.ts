import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Linea } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class LineaService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  list(): Observable<Linea[]> {
    return this.http
      .get<Linea[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Linea> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Linea>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(linea: Partial<Linea>): Observable<Linea> {
    return this.http
      .post<Linea>(this.apiUrl, linea)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Linea>): Observable<Linea> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Linea>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }

  get apiUrl() {
    return this.config.buildApiUrl('lineas');
  }
}
