import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sxi-fecha-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container [formGroup]="parent">
      <mat-form-field class="fill">
        <input
          matInput
          [matDatepicker]="fechaPicker"
          [placeholder]="placeholder"
          [formControlName]="property"
          [min]="min"
        />
        <mat-datepicker-toggle
          matSuffix
          [for]="fechaPicker"
        ></mat-datepicker-toggle>
        <mat-datepicker #fechaPicker></mat-datepicker>
      </mat-form-field>
    </ng-container>
  `,
  styles: [
    `
      .fill {
        width: 100%;
      }
    `
  ]
})
export class FechaFieldComponent implements OnInit {
  @Input() parent: FormGroup;

  @Input() property = 'fecha';
  @Input() placeholder = 'Fecha';
  @Input() min;

  constructor() {}

  ngOnInit() {}
}
