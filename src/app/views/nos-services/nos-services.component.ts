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
      illustration: 'assets/images/nos-services/frame_001.png',
      presentationImage: 'assets/images/nos-services/presentation_001.png',
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
      illustration: 'assets/images/nos-services/frame_002.png',
      presentationImage: 'assets/images/nos-services/presentation_002.png',
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
      illustration: 'assets/images/nos-services/frame_003.png',
      presentationImage: 'assets/images/nos-services/presentation_003.png',
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
      illustration: 'assets/images/nos-services/frame_004.png',
      presentationImage: 'assets/images/nos-services/presentation_004.png',
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
      illustration: 'assets/images/nos-services/frame_005.png',
      presentationImage: 'assets/images/nos-services/presentation_005.png',
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
      illustration: 'assets/images/nos-services/frame_006.png',
      presentationImage: 'assets/images/nos-services/presentation_006.png',
    },
  ];
}
