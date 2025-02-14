import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppSettingsService } from './common/services/app-settings/app-settings.service';
import { firstValueFrom } from 'rxjs';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { fullSpinnerInterceptor } from './common/full-spinner/full-spinner.interceptor';

export const appSettingFactory = (configService: AppSettingsService) => {
  return () => {
    return firstValueFrom(configService.loadConfig()).then(
      (config: any) => {
        configService.environment = config;
      },
      (error: any) => {
        console.error('Error loading config:', error);
        // appRef.tick(); // Manually trigger change detection to stop the app
        throw error;
      }
    );
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(),
    provideHttpClient(withInterceptors([fullSpinnerInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingFactory,
      deps: [AppSettingsService],
      multi: true,
    },
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};