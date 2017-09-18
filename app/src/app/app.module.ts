import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { MySpotsPage } from '../pages/my-spots/my-spots';
import { ReservePage } from '../pages/reserve/reserve';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../services/auth.service';
import { MockDataService } from '../services/mock.data.service';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountPage } from '../pages/account/account';

import {
GoogleMaps
} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MySpotsPage,
    ReservePage,
    DetailsPage,
    LoginPage,
    AccountPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MySpotsPage,
    ReservePage,
    DetailsPage,
    LoginPage,
    AccountPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    Geolocation,
    AuthService,
    MockDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
