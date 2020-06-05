import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtRequest } from '../jwtrequest';
import { AuthService } from '../service/auth.service';
import { JwtResponse } from '../jwtResponse';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
utenteLogin: JwtRequest;
utenteLoggato: JwtResponse;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.utenteLogin=  new JwtRequest({
      username:'',
      password: '',
    })
  }

  login(){
    this.auth.signIn(this.utenteLogin).subscribe(
      response => { 
        console.log(response)
        this.utenteLoggato = response;
        sessionStorage.setItem('username', this.utenteLogin.username  );
        sessionStorage.setItem('token', this.utenteLoggato.token);
        console.log(this.utenteLogin.username)
        console.log(this.utenteLoggato.token);
        this.router.navigate(['/allUtenti']);
        
      },
      error => {

        console.log(error);
  
      });
  }
}
