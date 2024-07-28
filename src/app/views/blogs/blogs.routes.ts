import { Routes } from '@angular/router';

export default [
  {
    path: ':blogId/details',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
    data: { animation: 'detailsBlogPage' },
  },
  {
    path: '',
    loadComponent: () =>
      import('./blogs.component').then((m) => m.BlogsComponent),
    data: { animation: 'blohsPage' },
  },
] as Routes;
