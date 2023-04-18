import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const TOKEN = '50607c69c563930ddfa7a9592f8e7e369df742ec';

    request = request.clone({
      setHeaders: { Authorization: `Bearer ${TOKEN}` },
    });
    return next.handle(request);
  }
}
