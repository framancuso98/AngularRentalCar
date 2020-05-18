import { Injectable } from '@angular/core';
import { JwtRequest } from '../jwtrequest';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtResponse } from '../jwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient,public jwtHelper: JwtHelperService) { }

  isUtenteLoggedIn(){
    return (sessionStorage.getItem('token') != null) ? true : false;
  }

  signIn(jwtRequest: JwtRequest){
   return this.httpClient.post<JwtResponse>("http://localhost:8080/SpringBootRentalCar/auth", jwtRequest);
  }

  signUp(){

  }

  loguot(){
  }
}
