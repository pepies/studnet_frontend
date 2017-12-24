import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NastaveniaPage } from './nastavenia';

@NgModule({
  declarations: [
    NastaveniaPage,
  ],
  imports: [
    IonicPageModule.forChild(NastaveniaPage),
  ],
})
export class NastaveniaPageModule {}
