import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-a',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ejercicio-a.component.html',
  styleUrl: './ejercicio-a.component.css'
})
export class EjercicioAComponent {
  fact: number = 0; //inicializo el valor html:[0]
  salida: number = 0; //inicializo el resultado html:[0]
  factorial(): void {
    let factorial = 1;  //creo una variable a 1
    for (let i = 1; i <= this.fact; i++) {  //bucle de 1 al valor de factorial
      factorial *= i;   // factorial = factorial x 1,2,3,4,5,...
    }
    this.salida = factorial;  //resultado de factorial multiplicado por "i", "i" veces
  }
  cifras: number = 10;
  formEjerA = new FormGroup({
    //FormControl('value',[array->Validators.atributo])
    numero: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.maxLength(this.cifras)
    ]),
  });
}
