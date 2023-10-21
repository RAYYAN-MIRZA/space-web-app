import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app_plus_nav_bar/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
