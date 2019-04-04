import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';

import { pluck } from 'rxjs/operators';

import { AppConfig } from '../models';

// import * as fromAuth from '../../auth/store';
// import { AuthSession } from '../../../auth/models/authSession';
// import { User } from 'app/auth/models/user';

@Component({
  selector: 'sxi-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  appConfig$: Observable<AppConfig>;
  title$: Observable<string>;

  // session$: Observable<AuthSession>;
  // user$: Observable<User>;
  // api$: Observable<any>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.appConfig$ = this.store.pipe(select(fromStore.getAppConfig));
    this.title$ = this.appConfig$.pipe(pluck('name'));

    /*
    this.session$ = this.store.pipe(select(fromAuth.getSession));
    this.user$ = this.store.pipe(select(fromAuth.getUser));
    this.api$ = this.store.pipe(select(fromAuth.getApiInfo));
    */
  }
}
