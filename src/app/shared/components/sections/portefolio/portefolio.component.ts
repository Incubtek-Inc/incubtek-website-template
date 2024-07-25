import { Component } from '@angular/core';
import { PORTEFOLIO } from '../../../constants/portefolio';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kom-portefolio',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './portefolio.component.html',
  styleUrl: './portefolio.component.scss',
})
export class PortefolioComponent {
  portefolios = PORTEFOLIO;
}
