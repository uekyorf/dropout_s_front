import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';
import { UUID } from 'angular2-uuid';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  inputName: string = '';
  uuid: string = '';
  errorMessage: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  submitButton() {
    const uuid = UUID.UUID()
    this.api.postSighup(this.inputName, uuid)
      .subscribe(
        data => {
          if (data.code === 200) {
            localStorage.setItem("signinUser", this.inputName);
            localStorage.setItem("device_uuid", uuid)
            this.navCtrl.setRoot(HomePage);
          }
          else if (data.code === 409) {
            this.errorMessage = "なまえががぶってるぉ";
          }
        }, err => console.log(err),
        () => { }
      )
  }

}
