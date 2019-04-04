import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromStore from '@app/store';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConfig, NavigationRoute } from '@app/core/models';

@Component({
  selector: 'sxi-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  app$: Observable<AppConfig>;

  navigation$: Observable<NavigationRoute[]>;

  dashboards: NavigationRoute[] = [
    {
      icon: 'equalizer',
      route: 'antiguedad',
      title: 'Antigüedad de saldos'
    }
  ];

  constructor(private store: Store<fromStore.State>) {
    this.app$ = this.store.pipe(select(fromStore.getAppConfig));
    this.navigation$ = this.store.pipe(select(fromStore.getMainNavigation));
  }

  ngOnInit() {}
}
