import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateLetterPage } from './create-letter';

@NgModule({
  declarations: [
    CreateLetterPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateLetterPage),
  ],
})
export class CreateLetterPageModule {}
