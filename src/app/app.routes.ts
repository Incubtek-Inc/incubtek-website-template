import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example',
    loadComponent: () =>
      import('./views/exemple/exemple.component').then(
        (m) => m.ExempleComponent
      ),
  },
  {
    path: '',
    redirectTo: '/example',
    pathMatch: 'full',
  },
];
