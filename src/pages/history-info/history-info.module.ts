import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryInfoPage } from './history-info';

@NgModule({
  declarations: [
    HistoryInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryInfoPage),
  ],
})
export class HistoryInfoPageModule {}
