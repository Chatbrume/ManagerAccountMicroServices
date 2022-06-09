import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../../entity/account';
import { AccountService } from '../../server/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AccountComponent implements OnInit
{
  account: Account = {id:0, discount:0, creationDate:new Date(2020, 1, 1), type:""};
  accountCreationDate = {"annees":2020, "mounth":1, "day":1}
  accountService: AccountService;

  lock: boolean = true;
  disabled: boolean = true;
  types: string[] = ["CURRENT", "SPARE"]

  constructor(private route: ActivatedRoute, private router: Router, accountService: AccountService, config: NgbModalConfig, private modalService: NgbModal) {
    this.accountService = accountService;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountService.getAccount(id).subscribe({
      next: (account: Account) => {
        if( account != null && account.id != null ) this.account = account
      },
      error: (err: HttpErrorResponse) => {
        this.router.navigateByUrl("error",{state:{name:err.name,message:err.message,status:err.status,statusText:err.statusText,url:err.url}});
      }
    });

    if( this.account.id == null ) this.router.navigateByUrl("error");
  }

  update() {
    console.log(this.account);
    this.accountService.updateAccount(this.account).subscribe({
      next: (account: Account) => {
        if( account != null && account.id != null ) this.account = account
      },
      error: (err: HttpErrorResponse) => {
        this.router.navigateByUrl("error",{state:{name:err.name,message:err.message,status:err.status,statusText:err.statusText,url:err.url}});
      }
    });
  }

  deleteAccount() {
    this.modalService.dismissAll();
    this.accountService.deleteAccount(this.account.id).subscribe({
      next: (account: Account) => {
        if( account != null && account.id != null ) this.router.navigate(["accounts"]);
      },
      error: (err: HttpErrorResponse) => {
        this.router.navigateByUrl("error",{state:{name:err.name,message:err.message,status:err.status,statusText:err.statusText,url:err.url}});
      }
    });
  }

  confirmDeletion(content: any) {
    this.modalService.open(content);
  }
}
