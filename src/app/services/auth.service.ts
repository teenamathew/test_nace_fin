import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthData } from '../common_interfaces/auth-data.model';

// for http error handling
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{msg: string, flag: number}>  {
    const authData: AuthData = { username: username, password: password };
    return this.http.post<{msg: string, flag: number}>(
      // change for server
      'http://localhost:3000/api/user/login',
      //  'http://nacefin.us-east-2.elasticbeanstalk.com/api/user/login',
        authData
      ).pipe(catchError(this.errorHandler));
      }

      errorHandler(erro: HttpErrorResponse) {
        return throwError(erro.statusText || 'Error of server');
      }

}
