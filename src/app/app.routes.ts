import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
    data: { animation: 'landingPage' },
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
