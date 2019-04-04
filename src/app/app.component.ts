import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from './store';

import { AppConfig } from './core/models';
import { MainNavigation } from './navigation/navigation';

@Component({
  selector: 'sxi-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  config: AppConfig = {
    name: 'SX IMPORTS',
    shortDescription: 'Sistema de control y administración de importaciones',
    longDescription: ''
  };

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromRoot.SetAppConfig({ config: this.config }));
    this.store.dispatch(
      new fromRoot.SetMainNavigation({ navigation: MainNavigation })
    );
  }
}
