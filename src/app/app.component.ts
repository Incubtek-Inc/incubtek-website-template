import { Component, inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import {
  ChildrenOutletContexts,
  Event,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { IStaticMethods } from 'preline/preline';

import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeroBannerComponent } from '@shared/components/hero-banner/hero-banner.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { slideInAnimation } from '@core/utils/animations';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroBannerComponent,
    FooterComponent,
  ],
  animations: [slideInAnimation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  private contexts = inject(ChildrenOutletContexts);

  ngOnInit(): void {
    this.reInitPrelineConfig();
  }

  reInitPrelineConfig() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              window.HSStaticMethods?.autoInit();
            }, 100);
          });
        }
        window.scrollTo(0, 0);
      });
    }
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
