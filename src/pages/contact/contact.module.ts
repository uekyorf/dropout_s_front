import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import {UserSearchPage} from "../user-search/user-search";
import {UserListPage} from "../user-list/user-list";

@NgModule({
  declarations: [
    ContactPage,
    UserSearchPage,
    UserListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonicPageModule.forChild(UserSearchPage),
    IonicPageModule.forChild(UserListPage),
  ],
  entryComponents: [
    ContactPage,
    UserSearchPage,
    UserListPage,
  ],

})
export class ContactPageModule {}
