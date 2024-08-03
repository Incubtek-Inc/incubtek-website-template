import {
  CommonModule,
  NgClass,
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { PORTEFOLIOS } from '@shared/constants/portefolio';

@Component({
  selector: 'app-portefolio',
  standalone: true,
  imports: [FooterComponent, NgFor, NgIf, UpperCasePipe, NgClass],
  templateUrl: './portefolio.component.html',
  styleUrl: './portefolio.component.scss',
})
export class PortefolioComponent {
  portefolios: any[] = PORTEFOLIOS;
  activeTab = 'all';

  setActiveTab(key: string) {
    this.activeTab = key;
  }
}
