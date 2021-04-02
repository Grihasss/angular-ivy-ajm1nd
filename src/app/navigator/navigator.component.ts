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

  getRandomNumber() {
    let random = Math.floor(Math.random() * 1000);
  return random
}

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
 
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
    this.Activatedroute.queryParamMap.subscribe(params => { 
              this.tabNo = +params.get('pageNum')||0;
              
          });


   
  

}