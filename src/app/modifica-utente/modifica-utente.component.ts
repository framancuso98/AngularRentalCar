import { Component, OnInit, Input } from '@angular/core';
import { UtenteInterface } from '../utente-interface';
import { RuoloInterface } from '../ruolo.interface';
import { UtenteService } from '../service/utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-utente',
  templateUrl: './modifica-utente.component.html',
  styleUrls: ['./modifica-utente.component.css']
})
export class ModificaUtenteComponent implements OnInit {

  
  role: RuoloInterface[];
  
 
  persona = JSON.parse(localStorage.getItem('utenteUpdate'));

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
    console.log(this.persona)
  }
  
  modifica(){
    this.utenteServ.modificaUtente(this.persona).subscribe(
      response =>{
        console.log(response);
        localStorage.removeItem("utenteUpdate");
        this.router.navigate(['/allUtenti']);
      },
      error =>{
        console.log(error.error);
      }
    )
  }
  
  
}
