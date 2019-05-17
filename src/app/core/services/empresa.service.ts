import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '@app/core/services/config.service';
import { Empresa } from '@app/domain/models';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('proveedores');
  }

  list(): Observable<Empresa[]> {
    return this.http
      .get<Empresa[]>(this.apiUrl)
      .pipe(catchError(error => throwError(error)));
  }

  get(id: number): Observable<Empresa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Empresa>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  save(proveedore: Partial<Empresa>): Observable<Empresa> {
    return this.http
      .post<Empresa>(this.apiUrl, proveedore)
      .pipe(catchError(error => throwError(error)));
  }

  update(update: Update<Empresa>): Observable<Empresa> {
    const url = `${this.apiUrl}/${update.id}`;
    return this.http
      .put<Empresa>(url, update.changes)
      .pipe(catchError(error => throwError(error)));
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(error => throwError(error)));
  }
}
