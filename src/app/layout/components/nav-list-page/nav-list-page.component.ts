import { Component, OnInit, Input } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import * as fromStore from '@app/store';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppConfig, NavigationRoute } from '@app/core/models';

@Component({
  selector: 'sxi-nav-list-page',
  templateUrl: './nav-list-page.component.html',
  styleUrls: ['./nav-list-page.component.scss']
})
export class NavListPageComponent implements OnInit {
  @Input() title = 'PAGE TITLE';

  @Input() sidenavWidth = '270px';

  @Input() navigation: NavigationRoute[] = [];

  app$: Observable<AppConfig>;

  constructor(
    public media: TdMediaService,
    private store: Store<fromStore.State>
  ) {
    this.app$ = this.store.pipe(select(fromStore.getAppConfig));
  }

  ngOnInit() {}
}
