import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  FormControl
} from '@angular/forms';

import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, filter } from 'rxjs/operators';

import { Compra, CompraDet } from '@app/domain/models/compras';
import { CompraFormService } from './compra-form.service';
import { ProveedorProducto, Proveedor } from '@app/domain/models';

import * as moment from 'moment';
import { CompraPartidasComponent } from './partidas/compra-partidas.component';

export const EntregaValidator: ValidatorFn = (fg: FormGroup) => {
  const fecha: moment.Moment = fg.get('fecha').value;
  const entrega: moment.Moment = fg.get('entrega').value;
  return !entrega
    ? null
    : entrega.isAfter(fecha)
    ? null
    : { entregaInvalida: true };
};

export function isMoment(
  fecha: moment.Moment | string
): fecha is moment.Moment {
  return (fecha as moment.Moment).toISOString !== undefined;
}

@Component({
  selector: 'sxi-compra-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.scss'],
  providers: [CompraFormService]
})
export class CompraFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  // tslint:disable-next-line: variable-name
  _compra: Compra;

  @Output()
  save = new EventEmitter();

  @Output()
  update = new EventEmitter<{ id: string; changes: Partial<Compra> }>();

  @Output()
  proveedorChange = new EventEmitter();

  @Input()
  productos: ProveedorProducto[] = [];

  @ViewChild(CompraPartidasComponent) partidasTable: CompraPartidasComponent;

  destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private service: CompraFormService,
    private cd: ChangeDetectorRef
  ) {
    this.buildForm();
    this.eventBus();
    this.service.registerForm(this.form);
  }

  ngOnInit() {
    if (this.compra) {
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private buildForm() {
    this.form = this.fb.group({
      proveedor: [null, [Validators.required]],
      fecha: [new Date(), [Validators.required]],
      entrega: [null, [Validators.required]],
      moneda: ['MXN', [Validators.required]],
      tipoDeCambio: [1.0, [Validators.required]],
      comentario: [null],
      partidas: this.fb.array([])
    });
  }

  private eventBus() {
    this.form
      .get('proveedor')
      .valueChanges.pipe(distinctUntilChanged())
      .pipe(
        // filter(p => !p.productos),
        takeUntil(this.destroy$)
      )
      .subscribe(p => this.proveedorChange.emit(p));

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      // console.log('Errors: ', this.form.value);
    });
  }

  get partidas(): FormArray {
    return this.form.get('partidas') as FormArray;
  }

  submit() {
    if (this.form.valid) {
      const data = this.resolveData();
      if (this.compra) {
        this.update.emit({ id: this.compra.id, changes: data });
      } else {
        this.save.emit(this.resolveData());
      }
      this.form.markAsPristine();
    }
  }

  private resolveData() {
    const fecha = this.form.get('fecha').value;
    const entrega: moment.Moment = this.form.get('entrega').value;
    const proveedor = this.form.get('proveedor').value;
    return {
      ...this.form.value,
      proveedor: proveedor.id,
      fecha: isMoment(fecha) ? fecha.toISOString() : fecha,
      entrega: isMoment(entrega) ? entrega.toISOString() : entrega
    };
  }

  get compra() {
    return this._compra;
  }

  @Input()
  set compra(c: Compra) {
    this._compra = c;
    if (c) {
      console.log('Editando compra: ', c);
      this.cleanPartidas();
      this.form.patchValue(c, { emitEvent: false });
      c.partidas.forEach(item => {
        this.partidas.push(new FormControl(item));
      });
      this.productos = c.proveedor.productos as ProveedorProducto[];
    }
  }

  agregarPartida() {
    this.service
      .agregarPartida(this.productos)
      .afterClosed()
      // .pipe(filter(val => !val))
      .subscribe(val => {
        if (val) {
          this.partidas.push(new FormControl(val));
          this.partidasTable.refresh();
          this.form.markAsDirty();
          this.cd.detectChanges();
        }
      });
  }

  private cleanPartidas() {
    while (this.partidas.length !== 0) {
      this.partidas.removeAt(0);
    }
  }

  get proveedor(): Proveedor {
    return this.form.get('proveedor').value;
  }

  isDisabled() {
    return this.form.invalid || this.form.pristine;
  }

  onEdit(index: number) {
    const ctrl = this.partidas.at(index);
    this.service
      .editarPartida(this.productos, ctrl.value)
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.partidas.setControl(index, new FormControl(res));
          this.partidasTable.refresh();
          this.form.markAsDirty();
          this.cd.detectChanges();
        }
      });
  }
}
