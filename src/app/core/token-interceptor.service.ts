import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../feature/user/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  /**
   * Method catch any request, then adds Authorization header with token, basic url of the backend server
   * and then returns an updated request
   * @param request - Incoming request
   * @param next - transforms httpRequest into a stream of HttpEvents, one of which will be HttpResponse
   * @returns - call of transformed request
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      },
      url: request.url
    });
    return next.handle(request);
  }
}
