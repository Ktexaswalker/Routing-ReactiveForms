import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-b',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ejercicio-b.component.html',
  styleUrl: './ejercicio-b.component.css'
})
export class EjercicioBComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacion: string = "";
  resultado: string = "";
  operar():void {
    if (this.operacion == "*") {
      this.resultado = String(Number(this. numero1) * Number(this.numero2));
    } else if (this.operacion == "/") {
      this.resultado = String(Number(this. numero1) / Number(this.numero2));
    } else if (this.operacion == "+") {
      this.resultado = String(Number(this. numero1) + Number(this.numero2));
    } else if (this.operacion == "-") {
      this.resultado = String(Number(this. numero1) - Number(this.numero2));
    } else {
      this.resultado = "operacion no valida";
    }
  }
  formEjerB = new FormGroup({
      //FormControl('value',[array->Validators.atributo])
      num1: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.maxLength(100)
      ]),
      num2: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.maxLength(100)
      ]),
      opera: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[+\-*/]+$/),
        Validators.maxLength(1)
      ]),
    });
}
