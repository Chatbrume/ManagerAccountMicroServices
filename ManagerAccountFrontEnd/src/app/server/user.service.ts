import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../entity/user";

@Injectable({ providedIn: 'root' })
export class UserService
{
  private host = "http://localhost:8081/manager-user/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.host+"users/");
  }

  /*getUsersByType(type: string): Observable<User[]> {
    return this.http.get<User[]>(this.host+"users/byType/"+type);
  }

  createUser(user: User): Observable<User> {
    const body : string = "{\"discount\":"+user.discount+",\"creationDate\":\""+user.creationDate+"\",\"type\":\""+user.type+"\"}";
    return this.http.post<User>(this.host+"users",body,this.httpOptions);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.host+"users/"+id);
  }

  updateUser(user: User): Observable<User> {
    const body : string = "{\"id\":"+user.id+",\"discount\":"+user.discount+",\"creationDate\":\""+user.creationDate+"\",\"type\":\""+user.type+"\"}";
    return this.http.put<User>(this.host+"users/"+user.id,body,this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.host+"users/"+id);
  }*/
}
