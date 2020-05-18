import { Component, OnInit } from '@angular/core';
import { AutoModel } from '../model/auto.model';
import { CategoriaModel } from '../model/categoria.model';
import { AutoService } from '../service/auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-auto',
  templateUrl: './aggiungi-auto.component.html',
  styleUrls: ['./aggiungi-auto.component.css']
})
export class AggiungiAutoComponent implements OnInit {

newAuto: AutoModel;
categorie: CategoriaModel[];

  constructor(private router: Router, private autoServ: AutoService) { }

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


    this.newAuto = new AutoModel({
      costruttore: '',
      modello: '',
      targa: '',
      anno:  "0000-00-00",
      categoria: new CategoriaModel(1,''),
    })
  }

  addAuto(){
    this.autoServ.aggiungiAuto(this.newAuto).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/allAuto']);
      },
      error => {
        //this.Errore =  error.error.messaggio;
        console.log(error);
        console.log(this.newAuto);
        console.log("erroreee");
      })
   
  }
}
