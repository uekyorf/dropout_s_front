import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { HistoryInfoPage } from './history-info';

@NgModule({
  declarations: [
    HistoryInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryInfoPage),
  ],
})
export class HistoryInfoPageModule {

  selectedHistory: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedHistory = navParams.get('history');

  }

}
