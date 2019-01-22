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
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  bles: Array<{area_name: string, ble_uuid: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    api.getBleList()
      .subscribe(data => {
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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
