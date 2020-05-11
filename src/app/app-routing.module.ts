import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : '', component: WelcomeComponent},
  { path : 'admin', component: AdminComponent},
  { path : 'allUtenti', component: ListaUtentiComponent},
  { path : 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
