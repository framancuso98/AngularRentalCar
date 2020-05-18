import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtenteInterface } from '../utente-interface';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {
utenti = [];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UtenteInterface[]> {
    return this.httpClient.get<UtenteInterface[]>('http://localhost:8080/SpringBootRentalCar/utente/all');
  }

  registraUser(newUtente: UtenteInterface) {
    console.log(newUtente)
    return this.httpClient.post<any>('http://localhost:8080/SpringBootRentalCar/utente/registra', newUtente);
  }

  eliminaUtente(id: number){
    return this.httpClient.delete<any>(`http://localhost:8080/SpringBootRentalCar/utente/elimina/${id}`);
  }

  aggiuniUtente(newUtente: UtenteInterface){
    console.log("sono in aggiuniUtente ")
    return this.httpClient.post<any>('http://localhost:8080/SpringBootRentalCar/utente/inserisci', newUtente);
  }

  modificaUtente(persona: UtenteInterface){
    console.log(persona)
    return this.httpClient.put<any>('http://localhost:8080/SpringBootRentalCar/utente/modifica', persona);
  }
}
