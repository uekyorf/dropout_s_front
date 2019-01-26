import { Component,Input ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {ListinfoPage} from "../listinfo/listinfo";

/**
 * Generated class for the UserSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-search',
  templateUrl: 'user-search.html',
})
export class UserSearchPage {
  @Input() text:string;
  users: Array<{search_word: string}>;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    api.getUser()
      .subscribe(
        data => {
          this.users = data['result'];
        },
        err => console.log(err),
        () => {}
      );
  }

  bleTapped(event, user) {
    this.navCtrl.push(ListinfoPage, {
      user: user
    })
  }

}
