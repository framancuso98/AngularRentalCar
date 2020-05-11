import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UtenteInterface } from '../utente-interface';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
utenti = [];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UtenteInterface[]> {
    return this.httpClient.get<UtenteInterface[]>('http://localhost:8080/SpringBootRentalCar/utente/all')
  }
}
