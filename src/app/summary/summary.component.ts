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
  rota;
  parseds;

  sf() {
    const picked = (({ data }) => ({ data }))(database);
    
    var objectName, nestedObject;
    var name = "Java";
    for(var key in database){
    for(var secondKey in database[key]){
      if(database[key][secondKey].includes(name)){
         objectName = key;
         nestedObject = secondKey;
      }
   }
}
console.log(objectName + ', ' + nestedObject);



    this.parseds
    
    return this.rota
  }

  constructor() { }

  ngOnInit() {
    console.log(this.rota);
  }

}