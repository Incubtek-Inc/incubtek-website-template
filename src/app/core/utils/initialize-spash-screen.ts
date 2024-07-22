import { SplashScreenService } from '../services/splash-screen.service';

export function initializeSplashScreen(
  splashScreenService: SplashScreenService
): () => Promise<void> {
  return async (): Promise<void> => {
    try {
      await splashScreenService.initialize();
    } catch (error) {
      console.error("Erreur lors de l'initialisation :", error);
    }
  };
}
