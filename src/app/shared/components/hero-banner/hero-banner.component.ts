import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kom-hero-banner',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class HeroBannerComponent {}
