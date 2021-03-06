import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Distribucion } from '@app/domain/models/embarques';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('distribuciones');
  }

  list(): Observable<Distribucion[]> {
    return this.http
      .get<Distribucion[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Distribucion> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Distribucion>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(embarque: Partial<Distribucion>): Observable<Distribucion> {
    return this.http
      .post<Distribucion>(this.apiUrl, embarque)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Distribucion>): Observable<Distribucion> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Distribucion>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
