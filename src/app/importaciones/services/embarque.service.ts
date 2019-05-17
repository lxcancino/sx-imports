import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Embarque } from '@app/domain/models/embarques';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class EmbarqueService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('embarques');
  }

  list(): Observable<Embarque[]> {
    return this.http
      .get<Embarque[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Embarque> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Embarque>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(embarque: Partial<Embarque>): Observable<Embarque> {
    return this.http
      .post<Embarque>(this.apiUrl, embarque)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Embarque>): Observable<Embarque> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Embarque>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
