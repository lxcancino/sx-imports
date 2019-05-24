import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import * as _ from 'lodash';

import { Observable, Subscription } from 'rxjs';
import {
  skip,
  switchMap,
  tap,
  debounceTime,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';
import { Proveedor } from '@app/domain/models';
import { ConfigService } from '@app/core/services/config.service';

export const PROVEEDOR_LOOKUPFIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => ProveedorFieldComponent),
  multi: true
};

@Component({
  selector: 'sxi-proveedor-field',
  providers: [PROVEEDOR_LOOKUPFIELD_VALUE_ACCESSOR],
  templateUrl: './proveedor-field.component.html',
  styleUrls: ['./proveedor-field.component.scss']
})
export class ProveedorFieldComponent implements OnInit, ControlValueAccessor {
  private apiUrl: string;

  searchControl = new FormControl();

  @Input()
  required = false;

  proveedores$: Observable<Proveedor[]>;

  @Input() tipo = 'COMPRAS';

  onChange;
  onTouch;
  subscription: Subscription;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('proveedores');
  }

  ngOnInit() {
    this.proveedores$ = this.searchControl.valueChanges.pipe(
      switchMap(term => this.lookupProveedores(term))
    );
    this.prepareControl();
  }

  private prepareControl() {
    this.subscription = this.searchControl.valueChanges
      .pipe(
        skip(1),
        tap(() => this.onTouch()),
        debounceTime(500)
        // distinctUntilChanged()
        // filter(value => _.isObject(value))
        // distinctUntilChanged((p: Proveedor, q: Proveedor) => p.id === q.id)
      )
      .subscribe(val => {
        if (_.isObject(val)) {
          this.onChange(val);
        } else {
          this.onChange(null);
        }
      });
  }

  lookupProveedores(value: string): Observable<Proveedor[]> {
    const params = new HttpParams().set('term', value).set('tipo', this.tipo);
    return this.http.get<Proveedor[]>(this.apiUrl, {
      params
    });
  }

  displayFn(proveedor: Proveedor) {
    if (!proveedor) {
      return '';
    }
    // return `${proveedor.nombre} (${proveedor.tipo})`;
    return `${proveedor.nombre} `;
  }

  writeValue(obj: any): void {
    this.searchControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.searchControl.disable() : this.searchControl.enable();
  }
}
