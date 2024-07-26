import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeSplashScreen } from '@core/utils/initialize-spash-screen';
import { SplashScreenService } from '@core/services/splash-screen.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSplashScreen,
      deps: [SplashScreenService],
      multi: true,
    },
    provideAnimations(),
  ],
};
