import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {database} from '../database';
import {types} from '../typing';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  database=database;
  types=types;
  tabNo=0;
  tabStr='income';
  
  product;

  getRandomNumber() {
    let random = Math.floor(Math.random() * 1000);
  return random
}

someFunction(){
    return this.product=types.find(product=>product.id === this.tabNo)
     console.log(this.product)
}

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    const routeParams = this.route.queryParamMap
       .subscribe(params => {
     this.tabNo = +params.get('tab');});;




    
    
  }

}