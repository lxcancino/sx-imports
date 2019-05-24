import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sxi-tc-field',
  templateUrl: './tc-field.component.html',
  styleUrls: ['./tc-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcFieldComponent implements OnInit {
  @Input() parent: FormGroup;

  @Input() property = 'moneda';
  @Input() tipoDeCambioProperty = 'tipoDeCambio';

  constructor() {}

  ngOnInit() {}
}
