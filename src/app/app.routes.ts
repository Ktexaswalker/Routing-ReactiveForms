import { Routes } from '@angular/router';
import { EjercicioAComponent } from './components/ejercicio-a/ejercicio-a.component';
import { EjercicioBComponent } from './components/ejercicio-b/ejercicio-b.component';
import { Ejer4Component } from './components/ejer4/ejer4.component';
import { Ejer5Component } from './components/ejer5/ejer5.component';

export const routes: Routes = [
    {
        path: '4',
        component: Ejer4Component,
        children:[
            {
                path: 'A',
                component: EjercicioAComponent
            },
            {
                path: 'B',
                component: EjercicioBComponent
            }
        ]
    },
    {
        path: '5',
        component: Ejer5Component
    }
];
