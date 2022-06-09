import { Component, OnInit } from '@angular/core';
import { Credentials } from '../entity/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  user: Credentials = {username:"", password:""};

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    /*this.loginService.updateAccount(this.user).subscribe({
      next: (user: UserLogin) => {
        if( account != null && account.id != null ) this.account = account
      },
      error: (err: HttpErrorResponse) => {
        this.router.navigateByUrl("error",{state:{name:err.name,message:err.message,status:err.status,statusText:err.statusText,url:err.url}});
      }
    });*/
  }
}
