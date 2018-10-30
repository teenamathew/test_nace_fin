import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthData } from '../common_interfaces/auth-data.model';
import { environment } from '../../environments/environment'
// for http error handling
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private api_obj: ApiEndpointsService) { }
  login(username: string, password: string): Observable<{msg: string, flag: number}>  {
    const authData: AuthData = { username: username, password: password };
    return this.http.post<{msg: string, flag: number}>(
      this.api_obj.login_route_endpoint,
        authData
      ).pipe(catchError(this.errorHandler));
      }

      errorHandler(erro: HttpErrorResponse) {
        return throwError(erro.statusText || 'Error of server');
      }

}
