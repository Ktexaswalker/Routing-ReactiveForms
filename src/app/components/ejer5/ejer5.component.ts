import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwnValidations } from '../../validations/own-validations';

@Component({
  selector: 'app-ejer5',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './ejer5.component.html',
  styleUrl: './ejer5.component.css'
})
export class Ejer5Component {
  datosForm:string = "";
  checkboxes:string[] = ["Videojuegos", "Accesorios", "Novedades del mercado"];
  estadoCivil:string[] = ["Casado/a", "Soltero/a", "Divorciado/a"];
  contactForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      OwnValidations.soloLetras,
      Validators.maxLength(6)
    ]),
    contrasenya: new FormControl('', [
      OwnValidations.password,
      Validators.required,
      Validators.minLength(8)
    ]),
    contrasenya2: new FormControl('', [
      OwnValidations.password2,
      Validators.required,
      Validators.minLength(8)
    ]),
    cemail: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    estcivil: new FormControl('', [
      Validators.required
    ]),
    sexe: new FormControl('', [
      Validators.required
    ]),
    reqinfo: new FormControl('', [
      Validators.required
    ]),
    accept: new FormControl('', [
      Validators.required
    ])
  });
  enviar():void {
    this.datosForm = `
      nombre: ${this.contactForm.value.nombre}, 
      contraseña: ${this.contactForm.value.contrasenya},
      contraseña repetida: ${this.contactForm.value.contrasenya2},
      correo electronico: ${this.contactForm.value.cemail},
      estado civil: ${this.contactForm.value.estcivil},
      sexo: ${this.contactForm.value.sexe},
      checkbox información: ${this.contactForm.value.reqinfo},
      aceptar condiciones: ${this.contactForm.value.accept},
    `;
  }
}
