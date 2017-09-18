import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySpotsPage } from './my-spots';

@NgModule({
  declarations: [
    MySpotsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySpotsPage),
  ],
})
export class MySpotsPageModule {}
