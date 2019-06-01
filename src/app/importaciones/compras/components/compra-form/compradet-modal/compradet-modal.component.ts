import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedorProducto } from '@app/domain/models';

import { Observable, Subject, combineLatest } from 'rxjs';
import {
  startWith,
  map,
  tap,
  distinctUntilChanged,
  takeUntil,
  filter
} from 'rxjs/operators';

import { isObject } from 'lodash/lang';
import { round } from 'lodash/math';

import { CompraDet } from '@app/domain/models/compras';
// import { isEmpty } from 'lodash/isEmpty';

@Component({
  selector: 'sxi-compradet-modal',
  templateUrl: './compradet-modal.component.html'
})
export class CompradetDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;

  compraDet: Partial<CompraDet>;

  productos: ProveedorProducto[];

  destroy$ = new Subject<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CompradetDialogComponent>,
    private fb: FormBuilder
  ) {
    this.productos = data.productos || [];
    this.compraDet = data.compraDet;
    this.buildForm();
    this.eventBus();
  }

  ngOnInit() {
    if (this.compraDet) {
      // console.log('Editando partida: ', this.compraDet);
      const cve = this.compraDet.clave;
      const producto = this.productos.find(item => item.clave === cve);
      const data = { ...this.compraDet, producto };
      this.form.patchValue(data);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private buildForm() {
    this.form = this.fb.group({
      producto: [null, [Validators.required]],
      solicitado: [0, [Validators.required, Validators.min(1)]],
      precio: [0.0, [Validators.required]],
      importe: [{ value: 0.0, disabled: true }, [Validators.required]]
    });
  }

  private eventBus() {
    this.form
      .get('producto')
      .valueChanges.pipe(
        distinctUntilChanged(),
        filter(val => isObject(val)),
        takeUntil(this.destroy$)
      )
      .subscribe(p => this.registerProducto(p));

    const precio$ = this.form.get('precio').valueChanges.pipe(
      distinctUntilChanged(),
      map(value => (!!value ? value : 0.0)),
      takeUntil(this.destroy$)
    );

    const solicitado$ = this.form.get('solicitado').valueChanges.pipe(
      distinctUntilChanged(),
      filter(value => !!value),
      takeUntil(this.destroy$)
    );
    const importe$ = combineLatest(solicitado$, precio$).pipe(
      map(res => this.calcularImporte(res[0], res[1], this.factor)),
      takeUntil(this.destroy$)
    );

    importe$.subscribe(v => this.form.get('importe').setValue(v));
  }

  private registerProducto(p: ProveedorProducto) {
    this.form.get('precio').setValue(p.costoUnitario);
  }

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
    const det: Partial<CompraDet> = {
      producto: val.producto.producto,
      clave: val.producto.clave,
      descripcion: val.producto.descripcion,
      solicitado: val.solicitado,
      precio: val.precio,
      importe: val.importe
    };
    this.dialogRef.close(det);
  }

  get title() {
    return 'Agregar producto ';
  }

  get producto() {
    return this.form.get('producto').value;
  }

  get factor() {
    if (this.producto) {
      return this.producto.factor;
    } else {
      return 1.0;
    }
  }
}
