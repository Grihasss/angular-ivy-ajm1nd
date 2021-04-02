import { Component, OnInit } from '@angular/core';
import {database} from '../database';
import {types} from '../typing';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  database=database
  types=types

  constructor() { }

  ngOnInit() {
  }

}