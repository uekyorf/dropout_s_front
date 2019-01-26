import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the CreateLetterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-letter',
  templateUrl: 'create-letter.html',
})
export class CreateLetterPage {
  message = {
    title:  '',
    body:  '',
    deviceName:'',
    due: '',
    bleUuid: '',
    toUser:'',
    toAllUsers: false,
  }
  errorMessage: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  submitButton() {
    this.api.PostCleateLetter(this.message)
      .subscribe(
        data => {
          if(data.code === 200) {
            console.log(data.message)
          }
          else if(data.code === 404) {
            this.errorMessage = data.message;
            console.log(this.errorMessage)
          }
          else if(data.code === 400) {
            this.errorMessage = data.message;
            console.log(this.errorMessage)
          }
        }, err => console.log(err),
        () => {}
      )
  }

}
