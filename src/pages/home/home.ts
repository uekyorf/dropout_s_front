import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Ble } from '../../providers/interfaces/Ble';

import { CreateLetterPage } from '../create-letter/create-letter'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bles: Ble[];
  pushPage: any;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.pushPage = CreateLetterPage;
  }
  getData() {
    this.api.getBleList()
      .subscribe(data => {
        this.bles = data['result'];
        console.log(this.bles);
      },
      err => console.log(err),
      () => {}
    );
  }

}
