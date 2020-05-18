import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { LoginComponent } from './login/login.component';
import { RegistraComponent } from './registra/registra.component';
import { RouteGuardService } from './service/route-guard.service';
import { EditorProfiloComponent } from './editor-profilo/editor-profilo.component';
import { ListaAutoComponent } from './lista-auto/lista-auto.component';
import { AggiungiUtenteComponent } from './aggiungi-utente/aggiungi-utente.component';
import { AggiungiAutoComponent } from './aggiungi-auto/aggiungi-auto.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { ModificaAutoComponent } from './modifica-auto/modifica-auto.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  

  {
    path: 'admin',
    component: AdminComponent,
    canActivate : [RouteGuardService],
  },
  
 {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registra',
    component: RegistraComponent
  },

  {
    path: 'allUtenti',
    component: ListaUtentiComponent,
    canActivate : [RouteGuardService],
  },

  {
    path: 'updateProfilo',
    component: EditorProfiloComponent,
    canActivate : [RouteGuardService],
  },

  {
    path: 'allAuto',
    component: ListaAutoComponent,
    canActivate : [RouteGuardService],
  },

  {
    path: 'addUtente',
    component: AggiungiUtenteComponent,
    canActivate : [RouteGuardService],
  },

  {
    path: 'addAuto',
    component: AggiungiAutoComponent,
    canActivate : [RouteGuardService],
  },

  {
    path: 'allPrenotazioni',
    component: ListaPrenotazioniComponent,
    canActivate : [RouteGuardService],
  },
  {
    path: 'modificaUtente',
    component: ModificaUtenteComponent,
    canActivate : [RouteGuardService],
  },
  {
    path: 'modificaAuto',
    component: ModificaAutoComponent,
    canActivate : [RouteGuardService],
  },

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [RouteGuardService]
})
export class RoutingModuleModule { }
