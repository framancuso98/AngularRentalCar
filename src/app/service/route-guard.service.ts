import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.auth.isUtenteLoggedIn()){
      this.router.navigate([('/login')]);
      console.log(sessionStorage.getItem('token'))
      console.log("sono in can activated false")
      return false;
    }else{
      console.log(sessionStorage.getItem('token'))
      console.log("sono in can activated true")
      return true;
    }
  }

}
