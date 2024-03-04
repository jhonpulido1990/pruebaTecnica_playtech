import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/service/login.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  private router = inject(Router);
  login = inject(LoginService);

  formulario: FormGroup;

  formBuilder = inject(FormBuilder);

  constructor() {
    this.formulario = this.formBuilder.group({
      User: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
      ],
      Clave: [
        '',
        [Validators.required, Validators.maxLength(20), this.noSpaces],
      ],
    });
  }

  noSpaces(control: AbstractControl) {
    const spaces = /\s/;
    if (control.value && spaces.test(control.value)) {
      return { noSpaces: true };
    }
    return null;
  }

  get f() {
    return this.formulario.controls;
  }

  enviarFormulario() {
    // Lógica para enviar o formulário
    if (this.formulario.valid) {
      // busqueda base de dados
      if (this.serachData()) {
        this.login.login('exitologin').subscribe(
          (response) => {
            console.log(response);
          },
        );
        /* this.router.navigate(['/home']) */
      } else {
        console.log('error');
      }
    }
    this.router.navigate(['/home'])
  }

  serachData(): boolean {
    if (
      this.formulario.value['User'] === 'CristianAndres' &&
      this.formulario.value['Clave'] === 'cblandon5'
    ) {
      return true;
    }
    return false;
  }
}
