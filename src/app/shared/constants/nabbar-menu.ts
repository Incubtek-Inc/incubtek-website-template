import { Menu } from '@shared/interfaces/navbar-menu';

export const MENUS: Menu[] = [
  {
    title: "L'agence",
    key: 'agency',
    icon: 'keyboard_arrow_down',
    children: [
      {
        title: 'Notre histoire',
        path: '/about-us',
      },
      {
        title: 'Notre methode',
        path: '/about-us',
      },
      {
        title: 'Nos valeurs',
        path: '/about-us',
      },
      {
        title: 'Notre équipe',
        path: '/about-us',
      },
    ],
  },
  {
    title: 'Nos services',
    key: 'services',
    icon: 'keyboard_arrow_down',
    children: [
      {
        title: 'Digital',
        path: '/nos-services',
      },
      {
        title: 'Médias et relations publiques',
        path: '/nos-services',
      },
      {
        title: 'Productions',
        path: '/nos-services',
      },
      {
        title: 'Évènementiel',
        path: '/nos-services',
      },
      {
        title: 'Conseils et statrégies',
        path: '/nos-services',
      },
      {
        title: 'Veille et Data',
        path: '/nos-services',
      },
    ],
  },
  {
    title: 'Portfolio',
    key: 'portfolio',
    path: '/portefolio',
  },
  {
    title: 'Blog',
    key: 'blog',
    path: '/blogs',
  },
];
