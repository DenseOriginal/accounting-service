import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryModule } from './history/history.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2HmbI1PmDdZh9xLKQDz9Y53jQf6diOqA",
  authDomain: "accounting-916db.firebaseapp.com",
  databaseURL: "https://accounting-916db.firebaseio.com",
  projectId: "accounting-916db",
  storageBucket: "accounting-916db.appspot.com",
  messagingSenderId: "97568766538",
  appId: "1:97568766538:web:64e50230c25e3b52a6c4b3"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    
    BrowserModule,
    AppRoutingModule,
    HistoryModule,
    SharedModule,
    LoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ AngularFireAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
