import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';
import { Credentials } from '../entity/credentials';

@Injectable({ providedIn: 'root' })
export class AuthentificationService
{
  private host = "http://localhost:8081/manager-account/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  private authenticated: boolean = false;

  constructor(private http: HttpClient) {}

  loginCredential(credential: Credentials): Observable<User> {
    const body : string = "{\"username\":\""+credential.username+"\",\"password\":\""+credential.password+"\"}";
    return this.http.post<User>(this.host+"auth/login",body,this.httpOptions);
  }

  login(username: string, password: string): Observable<User> {
    const body : string = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}";
    return this.http.post<User>(this.host+"auth/login",body,this.httpOptions);
  }

  /*login(username: string, password: string): Observable<User> {
    const body : string = "{\"username\":"+username+",\"password\":\""+password+"\"}";
    const obsuser:Observable<User> = this.http.post<User>(this.host+"auth/login",body,this.httpOptions);

    if(obsuser.)

    return
  }*/

  getAuthenticated() { return this.authenticated; }

  /*logout(): Observable<boolean> {
    return this.http.get(this.host+"auth/logout");
  }*/
}
