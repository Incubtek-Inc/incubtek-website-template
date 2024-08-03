import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedButtonComponent } from '../button.component';

@Component({
  selector: 'app-kom-hero-banner',
  standalone: true,
  imports: [RouterLink, SharedButtonComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class HeroBannerComponent {}
