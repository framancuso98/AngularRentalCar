import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const correctReq = req.clone({ headers: req.headers.set('authorization', 
          `bearer ${sessionStorage.getItem('token')}`) });
        return next.handle(correctReq);
    }
}