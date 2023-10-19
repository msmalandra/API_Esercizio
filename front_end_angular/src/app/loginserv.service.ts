import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risultato } from './Risposta';
import { Login } from './Login';



@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  private endPointR: string = "http://localhost:4000/api/login"

  constructor(private http: HttpClient) {

  }

  accessaLogin(objLg: Login) {

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPointR, JSON.stringify(objLg), { headers: header_custom })
  }
}
