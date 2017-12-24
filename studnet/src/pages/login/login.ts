import { Component } from '@angular/core';
import { NavController,MenuController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { PasswordPage } from '../password/password';
import { EmailPage } from '../email/email';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  ais_id :string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nativePageTransitions: NativePageTransitions,
    public menu: MenuController
  ) {
    this.menu.enable(false);
  }

  openPage(page: any) {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 1000,
      slowdownfactor: 3,
      slidePixels: 100,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     }
     //TODO: Native remove comment
    //this.nativePageTransitions.slide(options).then(()=>{
      // this.navCtrl.push(
      //   page,
      //   { ais_id: this.ais_id  },
      //   { animate: false}
      // )}
  //  )
    this.navCtrl.push(
      page,
      { ais_id: this.ais_id  },
      { animate: false}
    )
  }
  registred(){
    console.log(this.ais_id);
    if(this.ais_id === ""){
      this.openPage(PasswordPage);
    }else{
      this.openPage(EmailPage);
    }
  }
  REST(){
    // return this.http.get("https://restcountries.eu/rest/v1/name/")
    // .map(
    //   result =>
    //   {
    //     return result;
    //   });  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
