import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Aduana } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class AduanaService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  list(): Observable<Aduana[]> {
    return this.http
      .get<Aduana[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Aduana> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Aduana>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(aduana: Partial<Aduana>): Observable<Aduana> {
    return this.http
      .post<Aduana>(this.apiUrl, aduana)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Aduana>): Observable<Aduana> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Aduana>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }

  get apiUrl() {
    return this.config.buildApiUrl('aduanas');
  }
}
