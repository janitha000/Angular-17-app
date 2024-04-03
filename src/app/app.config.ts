import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  TitleStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './stratergies/titleStratergy';
import { DelayPreLoadStrategy } from './stratergies/delayPreloadStratergy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(DelayPreLoadStrategy)
    ),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
};
