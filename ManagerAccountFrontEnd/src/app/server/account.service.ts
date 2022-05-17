import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from "../entity/account";

@Injectable({ providedIn: 'root' })
export class AccountService
{
  private host = "http://localhost:8081/manager-account/";

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.host+"accounts/");
  }

  getAccountsByType(type: string): Observable<Account[]> {
    return this.http.get<Account[]>(this.host+"accounts/byType/"+type);
  }

  createAccount(account: Account): Observable<Account> {
    const body : string = "{\"discount\":"+account.discount+"\"creationDate\":"+account.creationDate+"\"type\":"+account.type+"}";
    return this.http.post<Account>(this.host+"accounts",body);
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(this.host+"accounts/"+id);
  }

  updateAccount(account: Account): Observable<Account> {
    const body : string = "{\"id\":"+account.id+"\"discount\":"+account.discount+"\"creationDate\":"+account.creationDate+"\"type\":"+account.type+"}";
    return this.http.put<Account>(this.host+"accounts/"+account.id, body);
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.host+"accounts/"+id);
  }
}
