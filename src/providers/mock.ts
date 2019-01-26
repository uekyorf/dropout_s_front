import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MockProvider {

  constructor(public http: Http){
    console.log('Hello ImageData Provider');
  }
  /*
     戻り値：[{"name":"string", "items":[string[]]}]
  */
  getSegmentItems(){
    let segments = [];
    for(let i = 0; i <2;i++){
      let item = this.getItem("menu", 15);
      segments.push(item);
    }
    return segments;
  }

  getJsonData(){
    this.http.get('../test.json').map(res
    => res.json()).subscribe(data => {
      console.log(data);
    });
  }

  /*
     戻り値：{"name":"string", "items":[string[]]}
  */
  getItem(name, num){
    let item = {
      "name":name,
      "items":[]
    };
    for(let i = 0; i < num;i++){
      item.items.push("item"+i);
    }
    return item;
  }


}
