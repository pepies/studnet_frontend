import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AutoCompleteModule } from 'ionic2-auto-complete';

import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { EmailPage } from '../pages/email/email';
import { SearchPage } from '../pages/search/search';
import { NastaveniaPage } from '../pages/nastavenia/nastavenia';
import { PredmetPage } from '../pages/predmet/predmet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SearchDataProvider } from '../providers/search-data/search-data';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PasswordPage,
    EmailPage,
    SearchPage,
    NastaveniaPage,
    PredmetPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AutoCompleteModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PasswordPage,
    EmailPage,
    SearchPage,
    NastaveniaPage,
    PredmetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchDataProvider
  ]
})
export class AppModule {}
