import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthentificationService } from './server/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = "ManagerAccountFrontEnd";
  public isMenuCollapsed : boolean = true;

  constructor(private auth: AuthentificationService, private http: HttpClient, private router: Router) {
    this.auth.login(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).finally(() => {
        this.auth.authenticated = false;
        this.router.navigateByUrl('/login');
    }).subscribe();
  }
}
