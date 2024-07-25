import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroBannerComponent } from './shared/components/hero-banner/hero-banner.component';
import { SERVICES } from './shared/constants/services';
import { CommonModule } from '@angular/common';
import { PARTENAIRES } from './shared/constants/partenaires';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PORTEFOLIO } from './shared/constants/portefolio';
import { ARTICLES } from './shared/constants/articles';
import { EQUIPES } from './shared/constants/equipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroBannerComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'komnayah';

  services = SERVICES;
  partenaires = PARTENAIRES;
  portefolios = PORTEFOLIO;
  articles = ARTICLES;
  equipes = EQUIPES;

  cards = Array(100).fill('card');
}
