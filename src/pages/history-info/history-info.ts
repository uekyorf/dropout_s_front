import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the HistoryInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-info',
  templateUrl: 'history-info.html',
})
export class HistoryInfoPage {
  selectHistoryInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    api.getMessage();
    this.selectHistoryInfo = navParams.get('historyInfo');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MessageHistoryPage');
  // }
  historyInfoTapped(event, historyInfo) {
    this.navCtrl.push(HistoryInfoPage, {
      historyInfo: historyInfo
    })
  }
}
