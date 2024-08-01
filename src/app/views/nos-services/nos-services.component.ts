import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedButtonComponent } from '@shared/components/button.component';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { PortefolioComponent } from '@shared/components/sections/portefolio/portefolio.component';
import { ProjetsComponent } from '@shared/components/sections/projets/projets.component';

@Component({
  selector: 'app-nos-services',
  standalone: true,
  imports: [
    NgFor,
    PortefolioComponent,
    ProjetsComponent,
    FooterComponent,
    SharedButtonComponent,
    RouterLink,
  ],
  templateUrl: './nos-services.component.html',
  styleUrl: './nos-services.component.scss',
})
export class NosServicesComponent {
  services = [
    {
      id: 1,
      title: 'digital',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/digital_illustration.jpg',
      presentationImage: 'assets/images/nos-services/digital_bg.jpg',
    },
    {
      id: 2,
      title: 'Médias et relations Publiques',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/media_illustration.png',
      presentationImage: 'assets/images/nos-services/media_presentation.jpg',
    },
    {
      id: 3,
      title: 'productions',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/digital_illustration.jpg',
      presentationImage: 'assets/images/nos-services/digital_bg.jpg',
    },
    {
      id: 4,
      title: 'évènements',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/media_illustration.png',
      presentationImage: 'assets/images/nos-services/media_presentation.jpg',
    },
    {
      id: 5,
      title: 'conseils et stratégie',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/digital_illustration.jpg',
      presentationImage: 'assets/images/nos-services/digital_bg.jpg',
    },
    {
      id: 6,
      title: 'Veille et Data (Social média et steling)',
      description:
        'Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore. At labore magni ex fuga voluptatum ut rerum cumque.',
      avantages: [
        {
          id: 1,
          name: 'Avantage 1',
        },
        {
          id: 2,
          name: 'Avantage 2',
        },
        {
          id: 3,
          name: 'Avantage 3',
        },
        {
          id: 4,
          name: 'Avantage 4',
        },
      ],
      illustration: 'assets/images/nos-services/media_illustration.png',
      presentationImage: 'assets/images/nos-services/media_presentation.jpg',
    },
  ];
}
