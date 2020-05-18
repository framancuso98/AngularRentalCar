import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/categoria.model';
import { AutoService } from '../service/auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-auto',
  templateUrl: './modifica-auto.component.html',
  styleUrls: ['./modifica-auto.component.css']
})
export class ModificaAutoComponent implements OnInit {

auto = JSON.parse(localStorage.getItem("autoUpdate"));

  categorie: CategoriaModel[];

  constructor(private autoServ: AutoService,private router: Router) { }

  ngOnInit(): void {
    this.categorie = [
      {
        id: 1,
        descrizione: 'City Car',
      },
      {
        id: 2,
        descrizione: 'SUV',
      },
      {
        id: 3,
        descrizione: 'Berlina',
      }, 
      {
        id: 4,
        descrizione: 'Coupé',
      },
      {
        id: 5,
        descrizione: 'Monovolume',
      },
      {
        id: 6,
        descrizione: 'Station Wagon',
      },
      {
        id: 7,
        descrizione: 'Crossover',
      },
    ]
  }

  modifica(){
    this.autoServ.modificaAuto(this.auto).subscribe(
      response =>{
        console.log(response);
        localStorage.removeItem("utenteAuto");
        this.router.navigate(['/allAuto']);
      },
      error =>{
        console.log(error.error)
      }
    )
  }
}
