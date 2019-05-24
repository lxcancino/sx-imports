import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material';

import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { TdDialogService } from '@covalent/core';

import { CompradetDialogComponent } from './compradet-modal/compradet-modal.component';
import { Proveedor, ProveedorProducto } from '@app/domain/models';
import { CompraDet } from '@app/domain/models/compras';

@Injectable()
export class CompraFormService {
  destroy = new Subject();
  // tslint:disable-next-line: variable-name
  _form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private dialogService: TdDialogService
  ) {}

  agregarPartida(productos: ProveedorProducto[]) {
    return this.dialog.open(CompradetDialogComponent, {
      data: {
        productos
      },
      width: '650px'
    });
  }


  editarPartida(productos: ProveedorProducto[], compraDet: Partial<CompraDet>) {
    return this.dialog.open(CompradetDialogComponent, {
      data: {
        productos,
        compraDet
      },
      width: '650px'
    });
  }

  registerForm(form: FormGroup) {
    this._form = form;
  }

  get proveedor(): Proveedor {
    return this._form.get('proveedor').value;
  }

  showError(message: string, title: string) {
    this.dialogService.openAlert({
      message,
      title,
      closeButton: 'CANCELAR'
    });
  }

  disconnect() {
    this.destroy.next(true);
    this.destroy.complete();
    this._form = null;
  }
}
