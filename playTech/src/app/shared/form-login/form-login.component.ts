import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  formulario: FormGroup;

  formBuilder = inject(FormBuilder);

  constructor() {
    this.formulario = this.formBuilder.group({
      User: ['',[Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      Clave: ['', [Validators.required, Validators.maxLength(20), this.noSpaces]],
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
      console.log(this.formulario.value)
    }
  }
}
