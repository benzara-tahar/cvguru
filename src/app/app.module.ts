import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { provideAuth, getAuth } from '@angular/fire/auth';

import { provideDatabase, getDatabase } from '@angular/fire/database';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, UserLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
