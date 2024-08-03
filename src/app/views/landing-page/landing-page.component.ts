import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedButtonComponent } from '@shared/components/button.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

import { HeroBannerComponent } from '@shared/components/hero-banner/hero-banner.component';
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
    HeroBannerComponent,
    ServicesComponent,
    PartenairesComponent,
    PortefolioComponent,
    EquipesComponent,
    ArticlesComponent,
    ProjetsComponent,
    FooterComponent,
    RouterLink,
    SharedButtonComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
