import { Component, OnInit, Input } from '@angular/core';
import { AutoModel } from '../model/auto.model';
import { AutoService } from '../service/auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit {
autos: AutoModel[];
  @Input('auto') auto;
  id: number;

  constructor(private autoServ: AutoService, private router: Router ) { }

  ngOnInit(): void {
    this.getAllAuto();
  }

  getAllAuto(){
    this.autoServ.getAllAuto().
    subscribe(autos => this.autos = autos)
  }

  elimina(auto: AutoModel){
    this.id = auto.id;
    console.log(auto)
    console.log(this.id)
    this.autoServ.eliminaAuto(this.id).subscribe(
      response => {
        console.log(response)
        this.getAllAuto();
      },
      error => {
        console.log(error);
  
      }
    )
  }

  modifica(auto: AutoModel){
    localStorage.setItem("autoUpdate", JSON.stringify(auto));
    console.log(localStorage.getItem("autoUpdate"));
    alert(auto.modello)
    this.router.navigate(['/modificaAuto'])
  }
}
