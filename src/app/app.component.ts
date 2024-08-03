import {
  AfterViewInit,
  Component,
  inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeroBannerComponent } from '@shared/components/hero-banner/hero-banner.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.ngZone.runOutsideAngular(() => {
            if (
              window &&
              window.HSStaticMethods &&
              typeof window.HSStaticMethods.autoInit === 'function'
            ) {
              window.HSStaticMethods.autoInit();
            }
          });
        }
        window.scrollTo(0, 0);
      });
    }
  }
}
