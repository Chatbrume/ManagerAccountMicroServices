import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent, data:{ name: "Error 404", message: "Cette page n'existe pas", status: 404, statusText: "Not found", url: "" }},
  { path: 'accounts', component: AccountsComponent},
  { path: 'account/:id', component: AccountComponent},
  { path: '**', redirectTo: "error/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
