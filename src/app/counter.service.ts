import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    sf(type, data) { 
      let count=0;
      let innerData = data['data']
      for(let key in innerData){
        for(let secondKey in innerData[key]){
          if(innerData[key][secondKey] == type){
            count+=1;
          }
        }
      }
      return count
    }
  constructor() { }

}