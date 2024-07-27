import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./views//contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    data: { animation: 'contactPage' },
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./views/decouverte/decouverte.component').then(
        (m) => m.DecouverteComponent
      ),
    data: { animation: 'aboutPage' },
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./views/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
    data: { animation: 'landingPage' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
