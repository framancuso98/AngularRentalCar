import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../service/utente.service';
import { UtenteInterface } from '../utente-interface';
@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {
  utenti: UtenteInterface[];
  constructor(private utenteServ: UtenteService) { }

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
}
