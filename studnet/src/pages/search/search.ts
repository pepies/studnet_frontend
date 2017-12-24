import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/search-data/search-data';
import { AutoCompleteComponent} from 'ionic2-auto-complete';

import { PredmetPage } from '../predmet/predmet';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchbar: AutoCompleteComponent;
  predmet: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public SearchDataProvider: SearchDataProvider,
    public menu: MenuController
  ) {
    
    
  }
  

  selected(){
    this.navCtrl.push(PredmetPage, {
      predmet: this.predmet
    })
  }

  openModalAdd(){
    
  }

  ionViewDidLoad() {
    this.menu.enable(true);
    console.log('ionViewDidLoad SearchPage');
    this.navCtrl.remove(0,2); //TODO: test back button at this view - osetrene v app.conponent.ts
  }

}
