import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SplashScreenService } from './core/services/splash-screen.service';
import { initializeSplashScreen } from './core/utils/initialize-spash-screen';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSplashScreen,
      deps: [SplashScreenService],
      multi: true,
    },
    provideAnimationsAsync(),
  ],
};
