import { Menu } from '../interfaces/navbar-menu';

export const MENUS: Menu[] = [
  {
    title: "L'agence",
    key: 'agency',
    icon: 'keyboard_arrow_down',
    children: [
      {
        title: 'Notre histoire',
        path: '',
      },
      {
        title: 'Notre methode',
        path: '',
      },
      {
        title: 'Nos valeurs',
        path: '',
      },
      {
        title: 'Notre équipe',
        path: '',
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
        path: '',
      },
      {
        title: 'Médias et relations publiques',
        path: '',
      },
      {
        title: 'Productions',
        path: '',
      },
      {
        title: 'Évènementiel',
        path: '',
      },
      {
        title: 'Conseils et statrégies',
        path: '',
      },
      {
        title: 'Veille et Data',
        path: '',
      },
    ],
  },
  {
    title: 'Portfolio',
    key: 'portfolio',
    path: '',
  },
  {
    title: 'Blog',
    key: 'blog',
    path: '',
  },
  // {
  //   title: 'Contactez-nous',
  //   icon: 'north_east',
  //   path: '',
  // },
];
