import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

import { MessagePost } from '../../providers/interfaces/MessagePost'
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
  message:MessagePost = {
    device_name:'',
    title:  '',
    body:  '',
    due: '',
    ble_uuid: '',
    to_user: [],
    to_all_users: false,
  }
  errorMessage: string = '';
  users = [
    { name: "hoge", id:0 },
    { name: "hige", id:1 },
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  submitButton() {
    this.api.PostCleateLetter(this.message)
      .subscribe(
        data => {
          console.log(data)
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
