import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetcheckPage } from './assetcheck';
import { ListassetPage } from '../listasset/listasset';
import { HistoryassetPage } from '../historyasset/historyasset';

@NgModule({
  declarations: [
    AssetcheckPage,
    ListassetPage,
    HistoryassetPage
  ],
  imports: [
    IonicPageModule.forChild(AssetcheckPage),
  ],
})
export class AssetcheckPageModule {

}
