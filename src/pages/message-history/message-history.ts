import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  selectHistory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public mock: MockProvider) {
    // MockProvider.getSegmentItems();
    this.selectHistory = navParams.get('history');
  }

  ionViewDidLoad() {
    this.selectHistory.getJsonData().subscribe(
      result =>{
        this.selectHistory=result.data.children;

      }
    );
    console.log('ionViewDidLoad MessageHistoryPage');
  }
  historyTapped(event, history) {
    this.navCtrl.push(HistoryInfoPage, {
      history: history
    })
  }

}
