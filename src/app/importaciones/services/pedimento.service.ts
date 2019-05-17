import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';

import { Pedimento } from '@app/domain/models/embarques';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class PedimentoService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('pedimentos');
  }

  list(): Observable<Pedimento[]> {
    return this.http
      .get<Pedimento[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Pedimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Pedimento>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(pedimento: Partial<Pedimento>): Observable<Pedimento> {
    return this.http
      .post<Pedimento>(this.apiUrl, pedimento)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Pedimento>): Observable<Pedimento> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Pedimento>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
