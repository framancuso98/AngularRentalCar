import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoModel } from '../model/auto.model';


@Injectable({
  providedIn: 'root'
})
export class AutoService {
autos = [];

  constructor(private HttpClient: HttpClient) { }

  getAllAuto(): Observable<AutoModel[]> {
    return this.HttpClient.get<AutoModel[]>('http://localhost:8080/SpringBootRentalCar/auto/all');
  }

  aggiungiAuto(newAuto: AutoModel){
    return this.HttpClient.post<any>('http://localhost:8080/SpringBootRentalCar/auto/inserisci', newAuto);
  }

  eliminaAuto(id: number){
    return this.HttpClient.delete<any>(`http://localhost:8080/SpringBootRentalCar/auto/elimina/${id}`)
  }

  modificaAuto(auto: AutoModel){
    console.log(auto);
    return this.HttpClient.put<any>('http://localhost:8080/SpringBootRentalCar/auto/modifica', auto);
  }
}
