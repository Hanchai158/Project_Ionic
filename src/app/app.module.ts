import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssetcheckPage } from '../pages/assetcheck/assetcheck';
import { ListassetPage } from '../pages/listasset/listasset';
import { HistoryassetPage } from '../pages/historyasset/historyasset';
import { NgxQRCodeModule } from 'ngx-qrcode2';  
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogdataProvider } from '../providers/logdata/logdata';
import { BuildingProvider } from '../providers/building/building';
import { RoomProvider } from '../providers/room/room';
import { UpdatelistProvider } from '../providers/updatelist/updatelist';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AssetcheckPage,
    ListassetPage,
    HistoryassetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AssetcheckPage,
    ListassetPage,
    HistoryassetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    LogdataProvider,
    BuildingProvider,
    RoomProvider,
    UpdatelistProvider
  ]
})
export class AppModule {}
