import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  (window as any).apiURL = (environment as any).apiURL;
  enableProdMode();
} else {
  (window as any).apiURL = 'http://api.journal.ru/v1';
}

platformBrowserDynamic().bootstrapModule(AppModule);
