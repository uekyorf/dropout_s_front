import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ble } from '../interfaces/Ble'

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {

  }
  getBleList(): Observable<any> {
    return this.http.get<Ble[]>('/api/ble/get');
  }

  getMessage(): Observable<any> {
    return this.http.get('/api/message/get');
  }

}
