import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Embarque } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-embarque-header',
  templateUrl: './embarque-header.component.html',
  styleUrls: ['./embarque-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmbarqueHeaderComponent implements OnInit {
  @Input() embarque: Embarque;
  constructor() {}

  ngOnInit() {}
}
