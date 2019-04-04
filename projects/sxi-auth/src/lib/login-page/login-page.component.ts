import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'sx-auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<any>;
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loading$ = of(false);
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    if (this.form.valid) {
    }
  }
}
