import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Clase } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('clases');
  }

  list(): Observable<Clase[]> {
    return this.http
      .get<Clase[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Clase> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Clase>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(clase: Partial<Clase>): Observable<Clase> {
    return this.http
      .post<Clase>(this.apiUrl, clase)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Clase>): Observable<Clase> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Clase>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
