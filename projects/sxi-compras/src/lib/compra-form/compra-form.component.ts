import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compra } from 'sx-domain';

@Component({
  selector: 'sxi-compras-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.scss']
})
export class CompraFormComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _compra: Compra;

  @Output() save = new EventEmitter<Partial<Compra>>();

  @Output() delete = new EventEmitter<Partial<Compra>>();

  form: FormGroup;

  monedas = [
    { clave: 'MXN', descripcion: 'PESOS (MXN)' },
    { clave: 'USD', descripcion: 'DOLARES (USD)' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [null],
      proveedor: [null, [Validators.required]],
      fecha: [new Date(), [Validators.required]],
      entrega: [null, [Validators.required]],
      moneda: ['USD', [Validators.required]],
      tipoDeCambio: [null, [Validators.required]],
      comentario: [null]
    });
  }

  submit() {
    if (this.form.valid) {
      const data: Partial<Compra> = { ...this.form.value };
      this.save.emit(data);
    }
  }

  @Input()
  set compra(com: Compra) {
    this._compra = com;
  }

  get compra() {
    return this._compra;
  }
}
