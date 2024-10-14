import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: any) => {
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
