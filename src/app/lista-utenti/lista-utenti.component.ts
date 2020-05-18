import { Component, OnInit, Input, Output } from '@angular/core';
import { UtenteService } from '../service/utente.service';
import { UtenteInterface } from '../utente-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {
  utenti: UtenteInterface[];
  //@Input('persona') persona;
  id: number;
  @Output('utente')utente;
  constructor(private utenteServ: UtenteService, private router: Router) {
   }

  ngOnInit(): void {
    this.getAllUtenti();
  }

  getAllUtenti(){
    this.utenteServ.getAll()
    .subscribe(utenti => this.utenti = utenti)
  }

  handleResponse(response: Object) {
    console.log(response)
  }


  elimina(persona: UtenteInterface){
    this.id = persona.id;
    this.utenteServ.eliminaUtente(this.id).subscribe(
      response => {
        console.log(response)
        this.getAllUtenti();
      },
      error => {
  
        //this.Errore =  error.error.messaggio;
        console.log(error);
  
      }
    )
  }

  modifica(persona: UtenteInterface){
    localStorage.setItem("utenteUpdate",  JSON.stringify(persona));
    console.log("sono in modifica")
    this.router.navigate(['/modificaUtente']);
  }
}
