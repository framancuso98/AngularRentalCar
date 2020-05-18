import { Component, OnInit } from '@angular/core';
import { UtenteInterface } from '../utente-interface';
import { UtenteService } from '../service/utente.service';
import { RuoloInterface} from '../ruolo.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.css']
})
export class RegistraComponent implements OnInit {

newUtente: UtenteInterface;
ruoloUtente: RuoloInterface;
Conferma: string;
  Errore: string;
registraOk: string;


  constructor(private utenteServ: UtenteService, private router: Router) { }

  ngOnInit(): void {
  
    this.newUtente = new UtenteInterface({
      username: '',
      password: '',
      nome: '',
      cognome:'',
      data_nascita: null,
      ruolo: new RuoloInterface(1, ''),
    })
    
  }

  AddNewUtente(){
    this.Conferma = '';
    this.Errore = '';

    this.utenteServ.registraUser(this.newUtente).subscribe(
    response => { 
      console.log(this.newUtente);
      console.log(response);
      this.router.navigate(['/login']);
      
      this.registraOk = 'registrazione avvenuta con successso, effettua il login per accedere alla piattaforma';

    },
    error => {

      //this.Errore =  error.error.messaggio;
      console.log(error);

    }
  )
  }
}
