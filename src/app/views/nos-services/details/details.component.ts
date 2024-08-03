import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { SharedButtonComponent } from '@shared/components/button.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { ProjetsComponent } from '@shared/components/sections/projets/projets.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [SharedButtonComponent, ProjetsComponent, FooterComponent, NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  avantages = [
    {
      title: 'Avantage 1',
      icon: 'assets/images/avantage_icon.png',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos',
    },
    {
      title: 'Avantage 2',
      icon: 'assets/images/avantage_icon.png',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos',
    },
    {
      title: 'Avantage 3',
      icon: 'assets/images/avantage_icon.png',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos',
    },
    {
      title: 'Avantage 4',
      icon: 'assets/images/avantage_icon.png',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos',
    },
  ];
  promesses = [
    {
      title: 'Promesse 1',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos dolore et eaque nobis a ipsam obcaecati non dicta impedit eos porro ducimus est minima rerum. Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore.',
    },
    {
      title: 'Promesse 2',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos dolore et eaque nobis a ipsam obcaecati non dicta impedit eos porro ducimus est minima rerum. Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore.',
    },
    {
      title: 'Promesse 3',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa delectus sit velit voluptatem ex sapiente autem 33 incidunt omnis. Ad internos dolore et eaque nobis a ipsam obcaecati non dicta impedit eos porro ducimus est minima rerum. Et eius odio hic ducimus impedit ut reiciendis repellendus et dolor tempora id magnam dignissimos ut placeat dolore.',
    },
  ];
  slides = [
    {
      src: 'assets/images/slide_001.svg',
      alt: 'Slide 1',
    },
    {
      src: 'assets/images/slide_002.svg',
      alt: 'Slide 2',
    },
    {
      src: 'assets/images/slide_003.svg',
      alt: 'Slide 3',
    },
    {
      src: 'assets/images/slide_004.svg',
      alt: 'Slide 4',
    },
    {
      src: 'assets/images/slide_005.svg',
      alt: 'Slide 5',
    },
    {
      src: 'assets/images/slide_006.svg',
      alt: 'Slide 6',
    },
    {
      src: 'assets/images/slide_007.svg',
      alt: 'Slide 7',
    },
    {
      src: 'assets/images/slide_008.svg',
      alt: 'Slide 8',
    },
  ];
  realisations = [
    {
      title: 'Fuller',
      jobName: 'digital',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa ',
      illustration: 'assets/images/realisations/realisation_001.png',
    },
    {
      title: 'Coca Lola',
      jobName: 'digital',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa ',
      illustration: 'assets/images/realisations/realisation_002.png',
    },
    {
      title: 'Piko Chit',
      jobName: 'digital',
      description:
        'At labore magni ex fuga voluptatum ut rerum cumque eum culpa ',
      illustration: 'assets/images/realisations/realisation_003.png',
    },
  ];
}
