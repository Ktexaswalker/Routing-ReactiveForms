# Routing & ReactiveForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Tutorial (pasos a seguir)
Ejercicio 4 - Componentes y primeros pasos
Crear 2 componentes, cada uno hará una funcionalidad. Los componentes se cargarán desde app.component
Existen 2 botones [EjercicioA][EjercicioB].
Al hacer clic en uno de los botones, desaparece lo que hay debajo y aparece lo relacionado con el boton. (routing)
[EjercicioA] debe pedir un numero, calcular el factorial y mostrar el resultado.
[`numero`] ! [factorial] = [`resultado`]
[EjercicioB] aparecen 3 `input` para introducir 2 numeros y una operación. Al pulsar en [opera] muestra el resultado según la operación escogida (+, -, *, /).
[`numero1`] [`numero2`] [`operacion`] [opera] = [`resultado`]
Una vez resuletos los puntos, valida todos los campos posibles e informa en caso de error (reactiveForms)

### 1º paso

Instalar boostrap
`npm install --save bootstrap`
Enlazar el package de bootstrap a la configuración de angular
- Ir a angular.json, para añadir el css y js de bootstrap: 
-> buscar "styles":[] e introducir la ruta al archivo de css dentro de bootstrap y hacer lo mismo para la distribución js

========================================================================

"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css","src/styles.css"],
"scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"]

========================================================================

Instalar jquery
`npm install --save jquery`
Enlazar el package de jquery a la configuración de angular
- En angular.json, añadir el js de jquery en scripts tal y como aparece en el codigo

========================================================================

"scripts": ["node_modules/jquery/dist/jquery.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js"]

========================================================================

Instar bootswatch
`npm install --save bootswatch`
Es posible importar directamente del node_modules al `styles.css` global, en vez de hacerlo desde angular.json
import "bootswatch/dist/[theme]/bootstrap.min.css";
Aqui muestro importar el tema [vapor] de bootswatch:

========================================================================

/* You can add global styles to this file, and also import other style files */
@import "bootswatch/dist/vapor/bootstrap.min.css";

========================================================================

En `https://bootswatch.com/` puedes encontrar todos los temas.

### 2º paso

Agregar componentes
- Angular permite generar un componente desde la consola mediante comandos.
ng g c <carpeta>/<componente>
ng generate component <carpeta>/<componente> ambas opciones son validas.
Para este ejercicio, generaré 2 componentes

========================================================================

ng g c components/ejercicioA
ng g c components/ejercicioB

========================================================================

Se han generado 2 carpetas
-Elimina todo el contenido de app.component.html y deja unicamente esto:

========================================================================

<router-outlet />

========================================================================

router-outlet es la parte visible de los otros componentes.
- Empecemos por el enrutado, ya que la pagina principal debe mostrar esos botones.

### app.routes

Configuramos lo que vendria a ser la barra de navegación en este caso [EjercicioA][EjercicioB].
El contenido actual es este:

========================================================================

import { Routes } from '@angular/router';
export const routes: Routes = [];

========================================================================

Generamos un array de {objetos} donde irán enlazados los componentes a cada url.
El nombre del path va a elección personal.

========================================================================

export const routes: Routes = [
    {
        path: 'ruta',
        component: nombre_componente
    },
];

========================================================================

El nombre del componente esta en components/<componente>-component.spec.ts
let component: nombre_componente
El resultado esperado deberia ser este:

========================================================================

import { EjercicioAComponent } from './components/ejercicio-a/ejercicio-a.component';
import { EjercicioBComponent } from './components/ejercicio-b/ejercicio-b.component';
export const routes: Routes = [
    {
        path: 'A',
        component: EjercicioAComponent
    },
    {
        path: 'B',
        component: EjercicioBComponent
    }
];

========================================================================

Angular deberia crear las importaciones, tal y como aparece en el codigo
con ng serve -o visualizamos la web. 
- Si le añadimos a la url el path, obtendremos la vista del componente.
    `localhost:4200/A` muestra: `ejercicio-a works!`
- En caso de querer una ruta por defecto para mostrar que la ruta no es correcta, se puede hacer otro componente `page404` y en Routes = [...] agregar:


========================================================================

{
    path: '**',
    component: Page404Component
}

========================================================================

La primera vista (path:'/'), es de 2 botones, los cuales queremos que solo se muestre el contenido de cada boton 
[EjercicioA][EjercicioB]
- En app.component.html creamos los botones y los vinculamos con `routerLink` (binding)

========================================================================

<button class="btn btn-success" routerLink="A">EjercicioA</button>
<button class="btn btn-secondary" routerLink="B">EjercicioB</button> 

========================================================================

- Es necesario importar la class RouterLink de Angular, para que funcione.
En app.component.ts está la lógica del componente. En imports, vamos a agregar RouterLink:

========================================================================

import { RouterLink, RouterOutlet } from '@angular/router'; 

  imports: [
    RouterOutlet,
    RouterLink
  ],

========================================================================

Automaticamente debe añadirse RouterLink al import de Angular/router.
Ahora ya podemos ver que al presionar un botón, nos redirige a cada componente.

### EjercicioA

- En `components/ejercicio-a/ejercicio-a.component.html` introducimos un codigo html para que se muestre <input><button>=<label>
[`numero`] ! [factorial] = [`resultado`]

========================================================================

<div>
    <input name="num" type="text" [(ngModel)]="fact">
    <button (click)="factorial()" class="btn btn-primary">Factorial</button><span> = </span>
    <output for="num">{{salida}}</output>
</div>

========================================================================

El ngModel va a causar un error ya que es necesario importar el `FormsModule` a la clase
- ngModel crea un canal bidireccional donde obtiene los valores, mientras que {{salida}}, es unidireccional.
component <-----FormsModule-----> html
component -------{{output}}-----> html
Teniendo esto en cuenta, es necesario aplicar las importaciones necesarias y la logica en 
`ejercicio-a.component.ts`
Es posible que el FormsModule no se carge correctamente, deberemos escribir lo siguiente:

========================================================================
import { FormsModule } from '@angular/forms';
  imports: [
    FormsModule
  ]

========================================================================

En este punto, el html se muestra correctamente y no marca ningun error.
Para aplicar la logica al componente se usa TypeScript que es como javaScript, pero con tipado estatico.
En el mismo archivo `ejercicio-a.component.ts`, agregamos los atributos y metodos para dar funcionalidad.

========================================================================

export class EjercicioAComponent {
  fact: number = 0;                         //inicializo el valor html:[0]
  salida: number = 0;                       //inicializo el resultado html:[0]
  factorial(): void {
    let factorial = 1;                      //creo una variable a 1
    for (let i = 1; i <= this.fact; i++) {  //bucle de 1 al valor de factorial
      factorial *= i;                       // factorial = factorial x 1,2,3,4,5,...
    }
    this.salida = factorial;  //resultado de factorial multiplicado por "i", "i" veces
  }
}

========================================================================

Ahora la aplicación ya puede mostrar resultados calculados en el metodo factorial().
NOTA: (click)="factorial()" es el onclick="" que llama a la función.

### Validar los campos (reactiveForms)

Para la validación de campos, existe un modulo de Angular/forms que al instanciarlo y agregarle atributos de la clase Validatos, puede reaccionar a las entradas del `formControlName=""` que se usan en el html. Vamos nuevamente al archivo `ejercicio-a.component.html` y le agregamos las etiquetas de form con fromGroup: <form [formGroup]="atributo"></form> y en el input, el <input formControlName="atributo">.

========================================================================

<form [formGroup]="formEjerA">
    <div>
        <input name="num" formControlName="numero" type="text" [(ngModel)]="fact">
        <button (click)="factorial()" class="btn btn-primary" [disabled]="formEjerA.invalid">Factorial</button><span> = </span>
        <output for="num">{{salida}}</output>
    </div>
</form>

========================================================================

- Hay varios campos importantes que se han de importar para que esto funcione.
En el archivo components.ts, hay que importar: ReactiveFormsModule, Validators, FormControl, FormGroup e instanciar el FormGroup tal que asi:

========================================================================

import { FormsModule, ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
formEjerA = new FormGroup({
    numero: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.maxLength(10)
    ]),
});

========================================================================

El "numero", es el nombre de la instancia `FormControl('valor',[validators.atributo])` que se asigna como atributo a la clase FormGroup.
- Para mostrar mensajes de error, se usa en este caso "formEjerA":
this.formEjerA.get("numero)?.invalid: formato no valido
this.formEjerA.get("numero)?.touched: input tocado
this.formEjerA.get("numero)?.errors?.[Validators]: validators definidos
Validators puede ser: 'required', 'pattern' o 'maxLength'.
El codigo de html con validaciones, quedará asi:

========================================================================

<form [formGroup]="formEjerA">
    <div>
        <input name="num" formControlName="numero" type="text" [(ngModel)]="fact">
        <button (click)="factorial()" class="btn btn-primary" [disabled]="formEjerA.invalid">Factorial</button><span> = </span>
        <output for="num">{{salida}}</output>
        @if (this.formEjerA.get('numero')?.invalid && this.formEjerA.get('numero')?.touched) {
            @if(this.formEjerA.get('numero')?.errors?.['required']) {
                <p class="text-danger">El numero no puede estar vacio</p>
            }
            @if(this.formEjerA.get('numero')?.errors?.['pattern']) {
                <p class="text-danger">El formato es incorrecto</p>
            }
            @if(this.formEjerA.get('numero')?.errors?.['maxlength']) {
                <p class="text-danger">El numero no puede ser superior de {{cifras}} cifras</p>
            }
        }
    </div>
</form>

========================================================================

Y el de components.ts, asi:

========================================================================

cifras: number = 10;
  formEjerA = new FormGroup({
    //FormControl('value',[array->Validators.atributo])
    numero: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.maxLength(this.cifras)
    ]),
  });

========================================================================

### Ejercicio B

Aplicando lo aprendido hasta ahora, hacemos lo mismo para el otro componente.
Esta vez iremos mas al grano, y crearemos las validaciones y todo en el html.
[`numero1`] [`numero2`] [`operacion`] [opera] = [`resultado`]
<input1><input2><input3><button>=<output><validation>

========================================================================

<form [formGroup]="formEjerB">
    <div>
        <input name="num1" type="text" formControlName="num1" [(ngModel)]="numero1"> 
        @if (this.formEjerB.get('num1')?.invalid && this.formEjerB.get('num1')?.touched) { 
          @if(this.formEjerB.get('num1')?.errors?.['required']) {
            <p class="text-danger">El numero no puede estar vacio</p>
          } 
          @if(this.formEjerB.get('num1')?.errors?.['pattern']) {
            <p class="text-danger">El formato no es correcto</p>
          }
          @if(this.formEjerB.get('num1')?.errors?.['maxLenght']) {
            <p class="text-danger">Tamaño excedido</p>
          } 
        }
        <input name="num2" type="text" formControlName="num2" [(ngModel)]="numero2"> 
        @if (this.formEjerB.get('num2')?.invalid && this.formEjerB.get('num2')?.touched) { 
          @if(this.formEjerB.get('num2')?.errors?.['required']) {
            <p class="text-danger">El numero no puede estar vacio</p>
          } 
          @if(this.formEjerB.get('num2')?.errors?.['pattern']) {
            <p class="text-danger">El formato no es correcto</p>
          } 
          @if(this.formEjerB.get('num2')?.errors?.['maxLenght']) {
            <p class="text-danger">Tamaño excedido</p>
          } 
        }
        <input name="operacion" type="text" formControlName="opera" [(ngModel)]="operacion"> 
        @if (this.formEjerB.get('opera')?.invalid && this.formEjerB.get('opera')?.touched) {
          @if(this.formEjerB.get('opera')?.errors?.['required']) {
            <p class="text-danger">El numero no puede estar vacio</p>
          } 
          @if(this.formEjerB.get('opera')?.errors?.['pattern']) {
            <p class="text-danger">El formato no es correcto</p>
          } 
          @if(this.formEjerB.get('opera')?.errors?.['maxLenght']) {
            <p class="text-danger">Tamaño excedido</p>
          } 
        }
        <button class="btn btn-primary" (click)="operar()">Opera</button>
        <output for="resultado">{{resultado}}</output>
    </div>
</form>

========================================================================

Es importante destacar, que los campos `[(ngModel)]` son especificos para los atributos del componente y nunca ha de tener el mismo nombre que las instancias de FormControl.
`FormControlName` y `FormGroup` van de la mano, mientras que `ngModel` es independiente
component.validation <------- FormGroup <---> FormControlName
component.atribute <------------------------> ngModel

========================================================================

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

========================================================================

Es importante tener bien los pattern, el error puede que nunca se muestre o la pagina no cargue correctamente
