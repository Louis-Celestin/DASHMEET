import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/_auth-services/token-storage.service';

//variable de récuperation

const token_header_key = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public token: TokenStorageService) {}
  // Cette methode permet d'inspecter  et transformer nos requêtes http avant de le send au serveurs
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();

    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(token_header_key, 'Bearer' + token),
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
