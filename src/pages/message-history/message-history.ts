import { Component } from '@angular/core';
import {DateTime, IonicPage, NavController, NavParams} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HistoryInfoPage} from "../history-info/history-info";
import { MockProvider } from '../../providers/mock';

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
  providers: [MockProvider],
})
export class MessageHistoryPage {
  // selectHistory: Array<{title: string, body: string, created_at: DateTime,userID:String}>;
  selectHistory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public mock: MockProvider) {
    // MockProvider.getSegmentItems();

    this.selectHistory = localStorage.getItem("uuidList");

  }



  // ionViewDidLoad() {
  //   this.selectHistory.getJsonData().subscribe(
  //     result =>{
  //       this.selectHistory=result.data.children;
  //
  //     }
  //   );
  //   console.log('ionViewDidLoad MessageHistoryPage');
  // }
  //readStorege
  historyTapped(event, selectHistory) {
    this.navCtrl.push(HistoryInfoPage, {
      history: history
    })
  }
}
