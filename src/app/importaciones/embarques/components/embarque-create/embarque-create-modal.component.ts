import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  selector: 'sxi-embarque-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './embarque-create-modal.component.html',
  styleUrls: ['./embarque-create-modal.component.scss']
})
export class EmbarqueCreateModalComponent implements OnInit, OnDestroy {
  form: FormGroup;

  destroy$ = new Subject<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EmbarqueCreateModalComponent>,
    private fb: FormBuilder
  ) {
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
      bl: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      proveedor: [null, [Validators.required]],
      aduana: [null, [Validators.required]],
      fecha: [new Date(), [Validators.required]],
      ingresoAduana: [null ],
      comentario: [],
      contenedores: [0, [Validators.required, Validators.min(0)]]
    });
  }

  private eventBus() {}

  submit() {
    const val = this.form.value;
    const data = {
      ...val
    };
    this.dialogRef.close(data);
  }
}
