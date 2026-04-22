import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),   
    provideHttpClient(),
    importProvidersFrom(IonicStorageModule.forRoot())
  ]
});