import { Component, OnInit } from '@angular/core';
import { PrenotazioneModel } from '../model/prenotazione.model';
import { PrenotazioneService } from '../service/prenotazione.service';
import { HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-prenotazioni',
  templateUrl: './lista-prenotazioni.component.html',
  styleUrls: ['./lista-prenotazioni.component.css']
})
export class ListaPrenotazioniComponent implements OnInit {

prenotazioni: PrenotazioneModel[];
headers: HttpHeaders;
  constructor(private prenotazioneServ: PrenotazioneService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getAllPrenotazioni()
  }

  getAllPrenotazioni(){
    console.log(this.prenotazioni)
    console.log()
    this.prenotazioneServ.getAll()
    .subscribe(prenotazioni => this.prenotazioni = prenotazioni)
    console.log(this.prenotazioni)
      console.log("sono in getAllPrenotazioni")
  }


  accetta(prenotazione: PrenotazioneModel){
    console.log(prenotazione);
    this.prenotazioneServ.accettaPrenotazione(prenotazione).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/allPrenotazioni']);
      },
      error =>{
        console.log(error);
        this.router.navigate(['/allPrenotazioni']);
      }
      
    )
  }
  rifiuta(prenotazione: PrenotazioneModel){
    console.log(prenotazione);
    this.prenotazioneServ.rifiutaPrenotazione(prenotazione).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/allPrenotazioni']);
      },
      error =>{
        console.log(error);
        this.router.navigate(['/allPrenotazioni']);
      }
      
    )
  }
}
