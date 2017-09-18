import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class AuthService {

  isAuth:boolean;

  constructor(public zone: NgZone) {
    this.isAuth = false;
  }

  public isAuthUser() {
    return this.isAuth;
  }

  private getStorageVariable(name) {

  }

  private setStorageVariable(name, data) {
  }

  private setIdToken(token) {

  }

  private setAccessToken(token) {

  }

  public isAuthenticated() {

  }

  public login() {
    this.isAuth = true;
  }

  public logout() {
    this.isAuth = false;
  }

}
