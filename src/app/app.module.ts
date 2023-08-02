import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

export const BACKEND_URL = new InjectionToken<string>('BACKEND_URL');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [{ provide: BACKEND_URL, useValue: 'http://localhost:1337' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
