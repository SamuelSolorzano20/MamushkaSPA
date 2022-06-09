import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { APP_ROUTING } from "./app.routes";
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LandingComponent } from './components/home/landing/landing.component';
// Modules
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"

import { environment } from 'src/environments/environment';
import { VestidosComponent } from './components/products/vestidos/vestidos.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    VestidosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
