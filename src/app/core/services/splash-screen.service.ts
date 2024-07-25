import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SplashScreenService {
  private _hideTimeout: any | null = null;
  private _minimumDisplayTime: number = 3000;
  private splashScreenElement: HTMLElement | null;

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _router: Router
  ) {
    this.splashScreenElement = this._document.querySelector('.splash-screen');
  }

  initialize(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (
        typeof window !== 'undefined' &&
        localStorage.getItem('hasShownLoadingScreen')
      ) {
        resolve();
        return;
      }

      this.show();
      this._hideTimeout = setTimeout(() => {
        this.hide();
        resolve();
      }, this._minimumDisplayTime);

      this._router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => {
          if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
          }
          typeof window !== 'undefined' &&
            localStorage.setItem('hasShownLoadingScreen', 'true');
          this.hide();
          resolve();
        });
    });
  }

  hide() {
    if (this.splashScreenElement) {
      this.splashScreenElement.style.display = 'none';
    }
  }

  show() {
    if (this.splashScreenElement) {
      this.splashScreenElement.style.display = 'flex';
    }
  }
}
