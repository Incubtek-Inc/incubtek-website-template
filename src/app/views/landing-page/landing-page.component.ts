import { Component } from '@angular/core';

import { ArticlesComponent } from '@shared/components/sections/articles/articles.component';
import { EquipesComponent } from '@shared/components/sections/equipes/equipes.conponent';
import { PartenairesComponent } from '@shared/components/sections/partenaires/partenaires.component';
import { PortefolioComponent } from '@shared/components/sections/portefolio/portefolio.component';
import { ProjetsComponent } from '@shared/components/sections/projets/projets.component';
import { ServicesComponent } from '@shared/components/sections/services/services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ServicesComponent,
    PartenairesComponent,
    PortefolioComponent,
    EquipesComponent,
    ArticlesComponent,
    ProjetsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
