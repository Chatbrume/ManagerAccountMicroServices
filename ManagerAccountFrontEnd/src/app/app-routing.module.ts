import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './accounts/account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'error/:code', component: ErrorComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'account/:id', component: AccountComponent},
  { path: '**', redirectTo: "error/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
