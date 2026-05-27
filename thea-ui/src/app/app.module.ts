import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CallbackComponent } from './components/callback/callback.component';

import {
  AboutComponent,
  AppNavbarComponent,
  CertificateComponent,
  ChainComponent,
  HistoryComponent,
  HomeComponent,
  ProfileComponent,
  RecentComponent,
  ReportsComponent,
  SearchComponent,
  TrustedComponent,
} from './components';

import { CertificateViewerComponent } from './components/certificate-viewer/certificate-viewer.component';
import { CertificateChainComponent } from './components/certificate-chain/certificate-chain.component';

@NgModule({ declarations: [
        AboutComponent,
        AppComponent,
        AppNavbarComponent,
        CallbackComponent,
        CertificateComponent,
        CertificateViewerComponent,
        ProfileComponent,
        RecentComponent,
        ReportsComponent,
        SearchComponent,
        CertificateChainComponent,
        ChainComponent,
        TrustedComponent,
        HistoryComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        BrowserModule,
        FormsModule,
        NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
