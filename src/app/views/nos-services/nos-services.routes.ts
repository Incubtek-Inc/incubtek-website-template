import { Routes } from '@angular/router';

export default [
  {
    path: ':serviceId/details',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
    data: { animation: 'detailsServicePage' },
  },
  {
    path: '',
    loadComponent: () =>
      import('./nos-services.component').then((m) => m.NosServicesComponent),
    data: { animation: 'servicePage' },
  },
] as Routes;
