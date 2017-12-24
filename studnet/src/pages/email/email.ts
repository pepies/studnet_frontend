import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  mail: string;
  ais_id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ais_id = this.navParams.get('ais_id');
    this.mail = this.ais_id + "@rest.sk"
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

}
