import { Component } from '@angular/core';

import { SharedButtonComponent } from '@shared/components/button.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { EquipesComponent } from '@shared/components/sections/equipes/equipes.conponent';
import { ProjetsComponent } from '@shared/components/sections/projets/projets.component';
import { ServicesComponent } from '@shared/components/sections/services/services.component';

@Component({
  selector: 'app-decouverte',
  standalone: true,
  imports: [
    SharedButtonComponent,
    ServicesComponent,
    EquipesComponent,
    ProjetsComponent,
    FooterComponent,
  ],
  templateUrl: './decouverte.component.html',
  styleUrl: './decouverte.component.scss',
})
export class DecouverteComponent {
  get setStyle() {
    return {
      wrapper: {
        backgroundColor: '#0A0A0A',
      },
      title: {
        color: '#fff',
      },
      line: {
        color: '#fff',
      },
    };
  }
}
