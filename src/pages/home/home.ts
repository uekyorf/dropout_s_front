import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Ble } from '../../providers/interfaces/Ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bles: Ble[];
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    
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
