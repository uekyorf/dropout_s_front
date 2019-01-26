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
  title: string = 'aaa';// TODO: けす
  body: string = 'aaa'; // TODO: けす
  errorMessage: string = '';
  deviceName: string = localStorage.getItem("device_uuid")
  due: string ='';
  bleUuid: string ='ff4f5d76-304a-42ff-a9e2-ef25178b1055'; // TODO: なおす
  toUser:string[] = [localStorage.getItem("sighinUser")];// TODO: なおす
  toAllUsers:boolean = false;// TODO: なおす

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  submitButton() {

    console.log(this.toUser)
    console.log(this.deviceName)
    this.api.PostCleateLetter(this.deviceName,this.title,this.body,this.due,this.bleUuid,this.toUser,this.toAllUsers)
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
