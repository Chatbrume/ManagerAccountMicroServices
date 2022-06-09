import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit
{
  httpError: any;

  constructor(private location: Location) {
    this.httpError = this.location.getState();
  }

  ngOnInit(): void {
  }

  gotBack() {
    history.back();
  }
}
