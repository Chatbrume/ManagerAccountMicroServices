import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit
{
  code: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code = Number(this.route.snapshot.paramMap.get('code'));
  }
}
