import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedButtonComponent } from '@shared/components/button.component';
import { PORTEFOLIO } from '@shared/constants/portefolio';

@Component({
  selector: 'app-kom-portefolio',
  standalone: true,
  imports: [SharedButtonComponent, RouterLink],
  templateUrl: './portefolio.component.html',
  styleUrl: './portefolio.component.scss',
})
export class PortefolioComponent {
  portefolios = PORTEFOLIO;
}
