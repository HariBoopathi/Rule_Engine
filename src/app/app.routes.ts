import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        loadComponent:() => import('./home/home.component').then((r) => r.HomeComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
];
