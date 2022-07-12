import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { TokenStorageService } from '../services/_auth-services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthentificatedGuard implements CanActivate {
  //loginService: any;

  constructor(private router: Router, private token: TokenStorageService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //declare un evaribale qui prend en compte la function haveToken
    // const isSignedIn: boolean = this.token.getUser();
    const isLoggedIn: boolean = !!this.token.getToken();
    if (!isLoggedIn) {
      this.router.navigate(['']);
    }

    //return true;
    return isLoggedIn;
  }
}
