import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { NavigationRoute } from '@app/core/models';

@Component({
  selector: 'sxi-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  @Input() operations: NavigationRoute[] = [];

  @Input() dashboards: NavigationRoute[] = [];

  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  closeSidebar() {
    this.close.emit();
  }
}
