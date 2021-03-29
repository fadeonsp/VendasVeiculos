import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/request-login';
import { ResponseLogin } from '../models/response-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin);
  }
}
