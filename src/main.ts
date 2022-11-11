import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Mapboxgl from 'mapbox-gl';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
Mapboxgl.accessToken = environment.mapboxKey;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
