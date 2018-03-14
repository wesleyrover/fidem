import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeardComponent, MenuComponent, TopoComponent, AjudaComponent, LoginComponent } from './views/index';
import { RoutingComponents, Routing } from './app.routing';


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
    HeardComponent,
    MenuComponent,
    TopoComponent,
    LoginComponent,
    AjudaComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    Routing, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }