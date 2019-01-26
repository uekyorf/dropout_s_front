import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ListinfoPage } from '../listinfo/listinfo';
// import { Ble } from '../../providers/interfaces/Ble';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  bles: Array<{area_name: string, ble_uuid: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    api.getBleList()
      .subscribe(
        data => {
          this.bles = data['result'];
        },
        err => console.log(err),
        () => {}
      );
  }

  bleTapped(event, ble) {
    this.navCtrl.push(ListinfoPage, {
      ble: ble
    })
  }
}
