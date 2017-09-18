import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private platform: Platform,private auth: AuthService) { }

  login() {
    this.auth.login();
  }

}
