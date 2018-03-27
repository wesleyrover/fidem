import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive , Injectable} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { RoutingComponents, Routing } from './app.routing';
import { FidemComponent } from './views/fidem/fidem.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCxRg5Knv_gcrxL_AmT93d6ovd5hDy4zoM',
  authDomain: 'fidem-client.firebaseapp.com',
  databaseURL: 'https://fidem-client.firebaseio.com',
  projectId: 'fidem-client',
  storageBucket: 'fidem-client.appspot.com',
  messagingSenderId: '311114959749'
};


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FidemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    Routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
