import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrenotazioneModel } from '../model/prenotazione.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<PrenotazioneModel[]>{
    console.log("sono in getAll")
    return this.HttpClient.get<PrenotazioneModel[]>('http://localhost:8080/SpringBootRentalCar/prenotazione/all');
    
  }

  accettaPrenotazione(prenotazione: PrenotazioneModel){
    console.log(prenotazione)
    return this.HttpClient.put<any>('http://localhost:8080/SpringBootRentalCar/prenotazione/accetta', prenotazione);
  }

  rifiutaPrenotazione(prenotazione: PrenotazioneModel){
    console.log(prenotazione)
    return this.HttpClient.put<any>('http://localhost:8080/SpringBootRentalCar/prenotazione/rifiuta', prenotazione);
  }
}
