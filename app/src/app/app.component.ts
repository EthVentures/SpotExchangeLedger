import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MySpotsPage } from '../pages/my-spots/my-spots';
import { ReservePage } from '../pages/reserve/reserve';
import { AuthService } from '../services/auth.service';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountPage } from '../pages/account/account';
import { HistoryPage } from '../pages/history/history';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  //pages: Array<{title: string, component: any}>;

  constructor(public modalCtrl: ModalController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public authService:AuthService) {
    this.initializeApp();
  }

  getPages(isAuthUser) {
    if (isAuthUser) {
      return [
        { title: 'Home', component: HomePage },
        { title: 'My Spots', component: MySpotsPage },
        { title: 'Reserve Spot', component: ReservePage },
        { title: 'History', component: HistoryPage },
        { title: 'My Account', component: AccountPage },
        { title: 'Legal', component: HomePage }
      ];
    } else {
      return [
        { title: 'Home', component: HomePage },
        { title: 'Legal', component: HomePage }
      ];
    }


  }

  login() {
    let profileModal = this.modalCtrl.create(LoginPage, { });
    profileModal.present();
  }

  register() {
    let profileModal = this.modalCtrl.create(RegisterPage, { });
    profileModal.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
