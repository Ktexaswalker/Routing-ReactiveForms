import { Routes } from '@angular/router';
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
