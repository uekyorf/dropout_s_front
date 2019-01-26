import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { MessageHistoryPage } from './message-history';
import { MockProvider } from '../../providers/mock';

@NgModule({
  declarations: [
    MessageHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageHistoryPage),
  ],
  providers:[
    MockProvider
  ]
})
export class MessageHistoryPageModule {


}
