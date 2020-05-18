import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UtenteComponent } from './utente/utente.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistraComponent } from './registra/registra.component';
import { FormsModule } from '@angular/forms';
import { RoutingModuleModule } from './routing-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorProfiloComponent } from './editor-profilo/editor-profilo.component';
//import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ListaAutoComponent } from './lista-auto/lista-auto.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AggiungiUtenteComponent } from './aggiungi-utente/aggiungi-utente.component';
import { AggiungiAutoComponent } from './aggiungi-auto/aggiungi-auto.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security.interceptor';
import { ModificaAutoComponent } from './modifica-auto/modifica-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WelcomeComponent,
    UtenteComponent,
    ListaUtentiComponent,
    LoginComponent,
    RegistraComponent,
    EditorProfiloComponent,
    ListaAutoComponent,
    TopBarComponent,
    AggiungiUtenteComponent,
    AggiungiAutoComponent,
    ListaPrenotazioniComponent,
    ModificaUtenteComponent,
    ModificaAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModuleModule,
    ReactiveFormsModule,
    //JwtModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
