import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { MessageHistoryPage } from './message-history';

@NgModule({
  declarations: [
    MessageHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageHistoryPage),
  ],
})
export class MessageHistoryPageModule {


}
