import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listinfo',
  templateUrl: 'listinfo.html',
})
export class ListinfoPage {
  selectedBle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedBle = navParams.get('ble');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListinfoPage');
  }

}
