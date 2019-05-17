import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';

import { Observable } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromRoot.State>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(fromRoot.getTenant),
      first(),
      flatMap(tenant => {
        request = request.clone({
          setHeaders: {
            'gorm.tenantId': tenant
          }
        });
        return next.handle(request);
      })
    );

    /*
    const tenant = 'PAPER';

    request = request.clone({
      setHeaders: {
        'gorm.tenantId': tenant
      }
    });
    console.log('******* Tenant interceptor applied *******');
    return next.handle(request);
    */
  }
}
