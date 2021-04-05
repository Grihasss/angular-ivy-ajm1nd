import { Component, OnInit } from '@angular/core';
import { database } from '../database';
import { types } from '../typing';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  database=database;
  types=types;

  count(type){
    return this.counterService.sf(type,this.database)
  }

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
  }

}