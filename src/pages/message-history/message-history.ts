import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListinfoPage} from "../listinfo/listinfo";
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the MessageHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-history',
  templateUrl: 'message-history.html',
})
export class MessageHistoryPage {
  selectHistory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    api.getMessage();
    this.selectHistory = navParams.get('history');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MessageHistoryPage');
  // }
  historyTapped(event, history) {
    this.navCtrl.push(ListinfoPage, {
      history: history
    })
  }

}
