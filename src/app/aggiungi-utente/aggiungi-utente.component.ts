import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../service/utente.service';
import { Router } from '@angular/router';
import { RuoloInterface } from '../ruolo.interface';
import { UtenteInterface } from '../utente-interface';

@Component({
  selector: 'app-aggiungi-utente',
  templateUrl: './aggiungi-utente.component.html',
  styleUrls: ['./aggiungi-utente.component.css']
})
export class AggiungiUtenteComponent implements OnInit {

  newUtente: UtenteInterface;
  role: RuoloInterface[];

  constructor(private utenteServ: UtenteService, private router: Router) { }

  ngOnInit(): void {
    this.role = [
      { 
        id:1,
        ruolo: "ROLE_ADMIN"
      },
      { 
        id:2,
        ruolo: "ROLE_USER"
      },
  
    ] 
    this.newUtente = new UtenteInterface({
      username: '',
      password: '',
      nome: '',
      cognome:'',
      data_nascita: null,
      ruolo:  new RuoloInterface(1, ''),
    })
  }

  addUtente(){
    this.utenteServ.aggiuniUtente(this.newUtente).subscribe(
      response => { 
        console.log(response);
        this.router.navigate(['/allUtenti']);
      },
      error => {
        //this.Errore =  error.error.messaggio;
        console.log(error.error);
        console.log(this.newUtente);
        console.log("erroreee");
      })
  }
}
