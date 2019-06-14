import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
  OnDestroy
} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable, Subject, combineLatest } from 'rxjs';
import {
  startWith,
  map,
  tap,
  distinctUntilChanged,
  takeUntil,
  filter
} from 'rxjs/operators';

import { round, isObject } from 'lodash';

import { CompraDet } from '@app/domain/models/compras';
import { EmbarqueDet } from '@app/domain/models/embarques';
// import { isEmpty } from 'lodash/isEmpty';

@Component({
  selector: 'sxi-embarquedet-modal',
  templateUrl: './embarquedet-modal.component.html',
  styleUrls: ['./embarquedet-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmbarquedetModalComponent implements OnInit, OnDestroy {
  form: FormGroup;

  embarqueDet: Partial<EmbarqueDet>;

  destroy$ = new Subject<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EmbarquedetModalComponent>,
    private fb: FormBuilder
  ) {
    this.embarqueDet = data.embarqueDet;
    this.buildForm();
    this.eventBus();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private buildForm() {
    this.form = this.fb.group({
      comentario: []
    });
  }

  private eventBus() {}

  private calcularImporte(
    cantidad: number,
    precio: number,
    factor: number
  ): number {
    const imp = (cantidad / factor) * precio;
    console.log('Calculando importe: ', imp);
    return round(imp, 2);
  }

  submit() {
    const val = this.form.value;
    this.dialogRef.close(val);
  }

  get title() {
    return 'Embarque unitario ';
  }

  get factor() {
    if (this.embarqueDet.producto) {
      return this.embarqueDet.factor;
    } else {
      return 1.0;
    }
  }
}
