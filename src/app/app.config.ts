import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './intecerptors/auth-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideToastr({ timeOut: 4000, closeButton: true, progressBar: true }), provideEnvironmentNgxMask(),
    provideAnimations(), provideHttpClient(withInterceptors([AuthInterceptor])), provideHttpClient(withFetch())
  ]
};
