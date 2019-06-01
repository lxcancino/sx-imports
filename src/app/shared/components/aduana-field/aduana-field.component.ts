import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { Aduana } from '@app/domain/models';
import { ConfigService } from '@app/core/services/config.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'sxi-aduana-field',
  template: `
    <ng-container [formGroup]="parent">
      <mat-form-field class="fill">
        <mat-select
          placeholder="Aduana"
          [formControlName]="property"
          class="fill"
        >
          <mat-option *ngFor="let aduana of aduanas" [value]="aduana.id"
            >{{ aduana.nombre }}
          </mat-option>
        </mat-select>
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
export class AduanaFieldComponent implements OnInit {
  private apiUrl: string;
  @Input() parent: FormGroup;

  @Input() property = 'aduana';

  aduanas: Aduana[] = [];

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = config.buildApiUrl('aduanas');
  }

  ngOnInit() {
    this.http
      .get<Aduana[]>(this.apiUrl)
      .subscribe(
        res => (this.aduanas = res),
        error => console.log('Error cargando aduanas: ', error)
      );
  }
}
