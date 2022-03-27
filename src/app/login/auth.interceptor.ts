import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("id_token")

    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + idToken)
      })

      return next.handle(cloned).pipe(
        catchError(
          (err, caught) => {
            if (err.status === 401){
              this.handleAuthError();
              return of(err);
            }
            throw err;
          }
        ))
    }

    return next.handle(request);
  }

  private handleAuthError() {
    localStorage.removeItem("id_token");
    this.router.navigateByUrl('login');
  }
}
