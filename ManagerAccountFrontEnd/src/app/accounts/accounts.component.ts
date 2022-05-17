import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../entity/account';
import { AccountService } from '../server/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit
{
  accounts: Account[] = [];
  accountService: AccountService;

  constructor(private router: Router, accountService: AccountService) {
    this.accountService = accountService;
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (accounts: Account[]) => this.accounts = accounts,
      error: (err: Error) => console.error('Error: ' + err)
    });
  }

  getAllAccounts() {
    this.accountService.getAccounts().subscribe({
      next: (accounts: Account[]) => this.accounts = accounts,
      error: (err: Error) => console.error('Error: ' + err)
    });
  }

  getAllAccountsByType(type: string) {
    if( type === 'CURRENT' || type === 'SPARE' )
      this.accountService.getAccountsByType(type).subscribe({
        next: (accounts: Account[]) => this.accounts = accounts,
        error: (err: Error) => console.error('Error: ' + err)
      });
    else
      this.accountService.getAccounts().subscribe({
        next: (accounts: Account[]) => this.accounts = accounts,
        error: (err: Error) => console.error('Error: ' + err)
      });
  }

  getAccount(id: number) {
    this.router.navigate(["account",id]);
  }
}
