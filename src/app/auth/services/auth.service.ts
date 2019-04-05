import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { ConfigService } from '@app/core/services/config.service';

import { Authenticate } from '../models/authenticate';
import { readFromStore, SESSION_KEY, AuthSession } from '../models/authSession';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  login(authenticate: Authenticate): Observable<any> {
    const url = this.config.buildApiUrl('login');
    return this.http
      .post<any>(url, authenticate)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getToken() {
    if (this.session) {
      return this.session.access_token;
    }
    return null;
  }

  get session() {
    return readFromStore();
  }

  getSessionInfo(): Observable<any> {
    const url = this.config.buildApiUrl('session');
    return this.http
      .get<any>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  saveInStorage(session: AuthSession) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  removeFromStorage() {
    localStorage.removeItem(SESSION_KEY);
  }
}
