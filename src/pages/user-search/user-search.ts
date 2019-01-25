import { Component,Input ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides} from 'ionic-angular';

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
  items = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado','Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSearchPage');
  }



}
