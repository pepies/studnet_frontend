import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {
  ais_id:string;
  input: String = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ais_id = this.navParams.get('ais_id');
  }


  validate(){
    this.navCtrl.push(
      SearchPage,
      { ais_id: this.ais_id  },
      { animate: false}
    );
  }
  
  ionViewDidLoad() {
    console.log(this.navParams.data);
  }

}
